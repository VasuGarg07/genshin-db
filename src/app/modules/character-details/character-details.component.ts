import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Character,
  Constellation,
  Items,
  StatResult,
  Talent,
} from 'genshin-db';
import { VisionColor } from 'src/app/helpers/enums';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character!: Character;
  charName!: string;
  color!: VisionColor;
  constellation!: Constellation;
  talent!: Talent;
  stats: StatResult[] = [];
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
    if (data) {
      this.character = data;
      this.color = Utils.elementColor(this.character.element);
      this.constellation = this.genshin.getConstellation(this.charName)!;
      this.talent = this.genshin.getTalent(this.charName)!;
      this.stat();
    } else this.router.navigate(['/characters']);
  }

  image(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  findStrong(string: string) {
    return string.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name)!;
    return material.images.fandom
      ? material.images.fandom
      : this.image(material.images.nameicon);
  }

  searchCharacters(key: string) {
    this.router.navigate(['/characters', key]);
  }

  iterableObject(obj: any): [string, Items[]][] {
    return Object.entries(obj);
  }

  stat() {
    const levels = [1, 20, 40, 50, 60, 70, 80, 90];
    levels.forEach((i) => {
      this.stats.push(this.character.stats(i));
      i > 1 && i < 90 && this.stats.push(this.character.stats(i, '+'));
    });
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  viewMaterial(item: string) {
    this.router.navigate(['/material', item]);
  }
}
