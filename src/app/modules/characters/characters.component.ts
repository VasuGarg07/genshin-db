import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/helpers/utilties';

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

  thumb(character: Character) {
    return character.images.cover1!;
  }

  vision(el: string) {
    return Utils.visionIcon(el);
  }

  rarity(el: string) {
    return Utils.starIcon(el);
  }
}
