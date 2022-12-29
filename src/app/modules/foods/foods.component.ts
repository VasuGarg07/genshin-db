import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  foods!: Food[];

  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.foods = this.genshin.getAllFood();
    console.log(this.foods);
  }

  lookup(name: string) {
    this.router.navigate(['/food', name]);
  }

  background(el: string) {
    const img = Utils.rarityBg(el);
    return `url('${img}')`;
  }

  thumb(food: Food) {
    return this.genshin.imageUrl(food.images.nameicon);
  }
}
