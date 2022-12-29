import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enemy } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-enemy-details',
  templateUrl: './enemy-details.component.html',
  styleUrls: ['./enemy-details.component.scss'],
})
export class EnemyDetailsComponent implements OnInit {
  data!: Enemy;
  name!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.name = name) : this.router.navigate(['/enemies']);
  }

  ngOnInit(): void {
    const data = this.genshin.getEnemy(this.name);
    data ? (this.data = data) : this.router.navigate(['/enemies']);
    console.log(data);
  }

  image(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  materialImage(name: string) {
    const material = this.genshin.getMaterial(name);
    if (material) {
      return material.images.fandom
        ? material.images.fandom
        : this.image(material.images.nameicon);
    } else {
      const artifact = this.genshin.getArtifact(name)!;
      return typeof artifact == 'object' && Array.isArray(artifact)
        ? this.image(
            artifact[0].images.nameflower || artifact[0].images.namecirclet
          )
        : this.image(artifact.images.nameflower || artifact.images.namecirclet);
    }
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }
}
