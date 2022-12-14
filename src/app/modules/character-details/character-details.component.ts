import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Character,
  Constellation,
  Items,
  StatResult,
  Talent,
} from 'genshin-db';
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
  stats!: StatResult;
  ascendedStats!: StatResult;
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
      this.levelStats(1);
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

  levelStats(level: number | null) {
    if (level) {
      const stats = this.genshin.getCharacterStats(this.charName, level);
      stats && (this.stats = stats);
      if (level > 10 && level < 90 && level % 10 == 0) {
        const ascended = this.genshin.getCharacterStats(
          this.charName,
          level,
          true
        );
        ascended && (this.ascendedStats = ascended);
      }
    }
  }
}
