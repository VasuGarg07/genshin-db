import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Character,
  characters,
  Talent,
  TalentMaterial,
  Weapon,
  WeaponMaterial,
} from 'genshin-db';
import { BirthdayMonth, Weekday } from 'src/app/helpers/constants';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  day!: string;
  month!: string;

  birthdays!: Character[];

  talentMaterials!: TalentMaterial[];
  talentChars: { [key: string]: Character[] } = {};

  weaponMaterials!: WeaponMaterial[];
  weapons: { [key: string]: Weapon[] } = {};

  constructor(private genshin: GenshinService, private router: Router) {
    this.month = BirthdayMonth[new Date().getMonth()];
    this.day = Weekday[new Date().getDay()];
  }

  ngOnInit(): void {
    // this.month = BirthdayMonth[6];
    this.birthdays = Utils.returnArray(
      this.genshin.filterCharacters(this.month)!
    ) as Character[];

    this.talentMaterials = Utils.returnArray(
      this.genshin.filterTalentMaterial(this.day)!
    ) as TalentMaterial[];
    this.talentMaterials.forEach((material: TalentMaterial) => {
      const chars: string[] = this.genshin.charsByTalentMaterial(
        material.name
      ) as string[];
      this.talentChars[material.name] = [];
      chars.forEach((char: string) => {
        const charData = this.genshin.getCharacter(char);
        charData && this.talentChars[material.name].push(charData);
      });
    });

    this.weaponMaterials = Utils.returnArray(
      this.genshin.filterWeaponMaterial(this.day)!
    ) as WeaponMaterial[];
    this.weaponMaterials.forEach((material: WeaponMaterial) => {
      this.weapons[material.name] = (
        Utils.returnArray(
          this.genshin.filterWeapons(material.name)!
        ) as Weapon[]
      ).filter((w: Weapon) => {
        return w.costs.ascend5;
      });
    });

    console.log(this.talentChars);
  }

  viewChar(name: string) {
    this.router.navigate(['/character', name]);
  }

  viewWeapon(name: string) {
    this.router.navigate(['/weapon', name]);
  }

  viewDomain(name: string) {
    this.router.navigate(['/domain', name]);
  }

  background(rarity: '1' | '2' | '3' | '4' | '5') {
    const img = Utils.rarityBg(rarity);
    return `url('${img}')`;
  }

  color(char: Character) {
    return Utils.elementColor(char.element);
  }

  thumb(char: Character | Weapon) {
    return this.genshin.imageUrl(char.images.nameicon);
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name)!;
    return this.genshin.imageUrl(material.images.nameicon);
  }
}
