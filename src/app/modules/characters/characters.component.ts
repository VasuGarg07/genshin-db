import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters!: Character[];
  title!: string;

  // TODO: FILTERS
  constructor(
    private genshin: GenshinService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const key = this.route.snapshot.paramMap.get('name');
    const chars = key && this.genshin.filterCharacters(key);
    if (typeof chars === 'object' && Array.isArray(chars)) {
      this.characters = chars.filter((char) => {
        return char.element !== 'None';
      });
    } else if (chars && typeof chars === 'object') {
      this.characters = [chars].filter((char) => {
        return char.element !== 'None';
      });
    }
    this.title = key
      ? parseInt(key)
        ? key + '* characters'
        : key + ' characters'
      : 'Characters';
  }

  ngOnInit(): void {
    if (!this.characters || !this.characters.length) {
      this.characters = this.genshin.getAllCharacters().filter((char) => {
        return char.element !== 'None';
      });
    }
  }

  getEnum(el: string) {
    return Utils.elementColor(el);
  }

  lookCharacter(name: string) {
    this.router.navigate(['/character', name]);
  }

  background(character: Character) {
    const hex = this.getEnum(character.element);
    return `linear-gradient(0deg, ${hex}88, ${hex}66), url("/assets/quality-bg/1.png")`;
  }
}
