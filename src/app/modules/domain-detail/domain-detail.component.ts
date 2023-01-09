import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domain, Enemy } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.scss'],
})
export class DomainDetailComponent implements OnInit {
  data!: Domain;
  domName!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.domName = name) : this.router.navigate(['/domains']);
  }

  ngOnInit(): void {
    const data = this.genshin.getDomain(this.domName);
    data ? (this.data = data) : this.router.navigate(['/domains']);
    console.log(data);
  }

  image(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  enemyImage(name: string) {
    const enemy: Enemy = this.genshin.getEnemy(name)!;
    return this.image(enemy.images.nameicon);
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
        ? this.image(artifact[0].images.nameflower!)
        : this.image(artifact.images.nameflower!);
    }
  }

  vision(el: string) {
    return Utils.visionIcon(el);
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  viewEnemy(item: string) {
    this.router.navigate(['/enemy', item]);
  }
}
