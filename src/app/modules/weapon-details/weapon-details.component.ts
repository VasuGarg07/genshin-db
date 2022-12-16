import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items, StatResult, Weapon } from 'genshin-db';
import { RarityColor } from 'src/app/helpers/enums';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
})
export class WeaponDetailsComponent implements OnInit {
  weaponData!: Weapon;
  weaponName!: string;
  color!: RarityColor;
  stats!: StatResult;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.weaponName = name;
    } else {
      this.router.navigate(['/weapons']);
    }
  }

  ngOnInit() {
    const data = this.genshin.getWeapon(this.weaponName);
    if (data) {
      this.weaponData = data;
      this.color = Utils.rarityColor(this.weaponData.rarity);
      console.log(this.weaponData, this.color);
    } else this.router.navigate(['/weapons']);
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
    this.router.navigate(['/weapons', key]);
  }

  iterableObject(obj: any): [string, Items[]][] {
    return Object.entries(obj);
  }

  levelStats(level: string) {
    const stats = this.genshin.getWeaponStats(this.weaponName, parseInt(level));
    stats && (this.stats = stats);
  }
}
