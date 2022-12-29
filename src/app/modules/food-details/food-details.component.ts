import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  name!: string;
  data!: Food;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.name = name) : this.router.navigate(['/foods']);
  }

  ngOnInit(): void {
    const data = this.genshin.getFood(this.name);
    if (data) {
      this.data = data;
      // this.color = Utils.rarityColor(this.data.rarity);
      console.log(data);
    } else this.router.navigate(['/weapons']);
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  thumb(food: Food) {
    return this.genshin.imageUrl(food.images.nameicon);
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name)!;
    return material.images.fandom
      ? material.images.fandom
      : this.genshin.imageUrl(material.images.nameicon);
  }
}
