import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items, StatResult, Weapon } from 'genshin-db';
import { RarityColor } from 'src/app/helpers/enums';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
})
export class WeaponDetailsComponent implements OnInit {
  data!: Weapon;
  weaponName!: string;
  color!: RarityColor;
  stats: StatResult[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.weaponName = name) : this.router.navigate(['/weapons']);
  }

  ngOnInit() {
    const data = this.genshin.getWeapon(this.weaponName);
    if (data) {
      this.data = data;
      this.color = Utils.rarityColor(this.data.rarity);
      this.stat();
    } else this.router.navigate(['/weapons']);
  }

  setEffectValue() {
    const regex: RegExp = /^r\d+$/;
    const refines: string[][] = [];
    for (const key of Object.keys(this.data).filter((key) => regex.test(key))) {
      refines.push(this.data[key as keyof Weapon] as string[]);
    }

    const result: string[] = [];
    // this.effectValues = refines[0].map((_, i) => refines.map(array => array[i]).join('/'));
    for (let i = 0; i < refines[0].length; i++) {
      result.push(refines.map((array: string[]) => array[i]).join(' / '));
    }

    return this.data.effect.replace(
      /{(\d+)}/g,
      (_, index) => `<strong>${result[index]}</strong>`
    );
  }

  stat() {
    const levels = [1, 20, 40, 50, 60, 70, 80, 90];
    levels.forEach((i) => {
      this.stats.push(this.data.stats(i));
      i > 1 && i < 90 && this.stats.push(this.data.stats(i, '+'));
    });
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  rarity(el: string) {
    return Utils.starIcon(el);
  }

  image(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  findStrong(string: string) {
    return string.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name);
    if (material) {
      return material.images.fandom
        ? material.images.fandom
        : this.genshin.imageUrl(material.images.nameicon);
    } else {
      return;
    }
  }

  searchWeapons(key: string) {
    this.router.navigate(['/weapons', key]);
  }

  iterableObject(obj: any): [string, Items[]][] {
    return Object.entries(obj);
  }

  viewMaterial(item: string) {
    this.router.navigate(['/material', item]);
  }
}
