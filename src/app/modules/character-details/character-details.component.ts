import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Constellation, Items, Talent } from 'genshin-db';
import { Color } from 'src/app/helpers/enums';
import { REGEX } from 'src/app/helpers/regex';
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

  // TODO: Character Level Stats & Talent Stats
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
    const constellation = this.genshin.getConstellation(this.charName);
    const talent = this.genshin.getTalent(this.charName);
    if (data && constellation && talent) {
      this.character = data;
      this.color = Utils.elementColor(this.character.element);
      this.constellation = constellation;
      this.talent = talent;
    } else this.router.navigate(['/characters']);
  }

  getImage(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  getLocalImage(folder: string, file: string, type: string) {
    return `/assets/${folder}/${file.toLocaleLowerCase()}.${type}`;
  }

  matchesRegex(input: string, regex: RegExp): boolean {
    return regex.test(input);
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name);
    if (material) {
      return material.images.fandom
        ? material.images.fandom
        : this.getImage(material.images.nameicon);
    } else {
      return;
    }
  }

  filter(key: string) {
    this.router.navigate(['/characters', key]);
  }

  iterableObject(obj: any): [string, Items[]][] {
    return Object.entries(obj);
  }
}
