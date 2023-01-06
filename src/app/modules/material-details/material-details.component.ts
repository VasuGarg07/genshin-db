import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.scss'],
})
export class MaterialDetailsComponent implements OnInit {
  name!: string;
  data!: Material;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.name = name) : this.router.navigate(['/materials']);
  }

  ngOnInit(): void {
    const data = this.genshin.getMaterial(this.name);
    if (data) {
      this.data = data;
      // this.color = Utils.rarityColor(this.data.rarity);
      console.log(data);
    } else this.router.navigate(['/materials']);
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  thumb(material: Material) {
    return this.genshin.imageUrl(material.images.nameicon);
  }
}
