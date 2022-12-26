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

  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.weapons = this.genshin.getAllWeapons().filter((w: Weapon) => {
      return w.costs.ascend5;
    });
  }

  lookWeapon(name: string) {
    this.router.navigate(['/weapon', name]);
  }

  background(el: string) {
    const img = Utils.rarityBg(el);
    return `url('${img}')`;
  }

  thumb(weapon: Weapon) {
    return this.genshin.imageUrl(weapon.images.nameicon);
  }
}
