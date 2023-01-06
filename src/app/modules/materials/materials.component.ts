import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit {
  materials!: Material[];

  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.materials = this.genshin.getAllMaterial();
    console.log(this.materials);
  }

  lookup(name: string) {
    this.router.navigate(['/material', name]);
  }

  background(el: string) {
    const img = Utils.rarityBg(el);
    return `url('${img}')`;
  }

  thumb(material: Material) {
    return this.genshin.imageUrl(material.images.nameicon);
  }
}
