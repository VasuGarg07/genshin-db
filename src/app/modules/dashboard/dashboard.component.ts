import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Character,
  Material,
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

  talentMaterials!: Material[];
  characters: { [key: string]: Character[] } = {};

  weaponMaterials!: Material[];
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

    const materials = Utils.returnArray(this.genshin.filterMaterial(this.day)!);

    this.talentMaterials = materials.filter(
      (item) => item.materialtype.includes('Talent') && item.rarity == '2'
    );
    this.talentMaterials.forEach((material: Material) => {
      const chars: string[] = this.genshin.charsByTalentMaterial(
        material.name
      ) as string[];
      this.characters[material.name] = [];
      chars.forEach((char: string) => {
        const charData = this.genshin.getCharacter(char);
        charData && this.characters[material.name].push(charData);
      });
    });

    this.weaponMaterials = materials.filter(
      (item) => item.materialtype.includes('Weapon') && item.rarity == '2'
    );
    this.weaponMaterials.forEach((material: Material) => {
      this.weapons[material.name] = (
        Utils.returnArray(
          this.genshin.filterWeapons(material.name)!
        ) as Weapon[]
      ).filter((w: Weapon) => {
        return w.costs.ascend5;
      });
    });

    console.log(this.talentMaterials, this.weaponMaterials);
  }

  viewChar(name: string) {
    this.router.navigate(['/character', name]);
  }

  viewWeapon(name: string) {
    this.router.navigate(['/weapon', name]);
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

  materialImage(name: Material) {
    return this.genshin.imageUrl(name.images.nameicon);
  }
}
