import { Component, OnInit } from '@angular/core';
import { AdventureRank, AdventureRankReward } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-adventure-ranks',
  templateUrl: './adventure-ranks.component.html',
  styleUrls: ['./adventure-ranks.component.scss'],
})
export class AdventureRanksComponent implements OnInit {
  ranks!: AdventureRank[];
  rankIcon!: string;
  constructor(private genshin: GenshinService) {}

  ngOnInit(): void {
    this.ranks = this.genshin.getRanks();
    this.rankIcon = this.genshin.imageUrl('UI_ItemIcon_102');
    console.log(this.ranks);
  }

  materialImage(name: AdventureRankReward) {
    switch (name.type) {
      case 'ARTIFACT':
        const artifact = this.genshin.getArtifact(name.name)!;
        return typeof artifact == 'object' && Array.isArray(artifact)
          ? this.genshin.imageUrl(artifact[0].images.nameflower!)
          : this.genshin.imageUrl(artifact.images.nameflower!);
      case 'WEAPON':
        const weapon = this.genshin.getWeapon(name.name)!;
        return this.genshin.imageUrl(weapon.images.nameicon);
      case 'MATERIAL':
        try {
          const material = this.genshin.getMaterial(name.name)!;
          return this.genshin.imageUrl(material.images.nameicon);
        } catch {
          const food = this.genshin.getFood(name.name)!;
          return this.genshin.imageUrl(food.images.nameicon);
        }
    }
  }

  artifact(name: string) {
    const artifact = this.genshin.getArtifact(name)!;
    return typeof artifact == 'object' && Array.isArray(artifact)
      ? this.genshin.imageUrl(artifact[0].images.nameflower!)
      : this.genshin.imageUrl(artifact.images.nameflower!);
  }
}
