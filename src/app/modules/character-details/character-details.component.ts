import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Constellation, Talent } from 'genshin-db';
import { Color } from 'src/app/helpers/enums';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  charName!: string;
  color!: Color;
  constellation!: Constellation;
  talent!: Talent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.charName = name) : this.router.navigate(['/characters']);
  }

  ngOnInit(): void {
    const data = this.genshin.getCharacter(this.charName);
    const cnstl = this.genshin.getCharacterConstellations(this.charName);
    const talent = this.genshin.getTalent(this.charName);
    if (data && cnstl && talent) {
      this.character = data;
      this.color = Utils.elementColor(this.character.element);
      this.constellation = cnstl;
      this.talent = talent;
      console.log(this.character);
    } else this.router.navigate(['/characters']);
  }

  getImage(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  rarity(num: string) {
    return `/assets/rarity/Icon_${num}_Stars.png`;
  }
  element(vision: string) {
    return `/assets/vision/${vision.toLocaleLowerCase()}.svg`;
  }
  weapon(type: string) {
    return `/assets/weapons/${type.toLocaleLowerCase()}.png`;
  }
  flag(type: string) {
    return `/assets/flags/${type.toLocaleLowerCase()}.svg`;
  }
}
