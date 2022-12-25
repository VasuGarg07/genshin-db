import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Weapon } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
})
export class WeaponsComponent implements OnInit {
  weapons!: Weapon[];
  title!: string;

  // TODO: FILTERS
  constructor(
    private genshin: GenshinService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const key = this.route.snapshot.paramMap.get('name');
    const weapons = key && this.genshin.filterWeapons(key);
    if (typeof weapons === 'object' && Array.isArray(weapons)) {
      this.weapons = weapons.filter((w: Weapon) => {
        return w.costs.ascend5;
      });
    } else if (weapons && typeof weapons === 'object') {
      this.weapons = [weapons].filter((w: Weapon) => {
        return w.costs.ascend5;
      });
    }
    this.title = key
      ? parseInt(key)
        ? key + '* weapons'
        : key + ' weapons'
      : 'weapons';
  }

  ngOnInit(): void {
    if (!this.weapons || !this.weapons.length) {
      this.weapons = this.genshin.getAllWeapons().filter((w: Weapon) => {
        return w.costs.ascend5;
      });
    }
  }

  lookWeapon(name: string) {
    this.router.navigate(['/weapon', name]);
  }

  weaponIcon(el: string) {
    return Utils.weaponIcon(el);
  }

  rarity(el: string) {
    return Utils.starIcon(el);
  }

  thumb(weapon: Weapon) {
    return this.genshin.imageUrl(weapon.images.namegacha);
  }
}
