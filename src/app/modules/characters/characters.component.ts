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

  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.characters = this.genshin.getAllCharacters().filter((char) => {
      return char.element !== 'None';
    });
  }

  getEnum(el: string) {
    return Utils.elementColor(el);
  }

  lookCharacter(name: string) {
    this.router.navigate(['/character', name]);
  }

  vision(el: string) {
    return Utils.visionIcon(el);
  }

  rarity(el: string) {
    return Utils.starIcon(el);
  }
}
