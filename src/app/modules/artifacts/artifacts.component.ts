import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artifact } from 'genshin-db';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss'],
})
export class ArtifactsComponent implements OnInit {
  artifacts!: Artifact[];
  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.artifacts = this.genshin.getAllArtifacts().filter((arti) => {
      return arti.flower;
    });
  }

  lookup(name: string) {
    this.router.navigate(['/artifact', name]);
  }

  background(arti: Artifact) {
    const star = arti.rarity[arti.rarity.length - 1];
    const img = Utils.rarityBg(star);
    return `url('${img}')`;
  }

  thumb(arti: Artifact) {
    return this.genshin.imageUrl(arti.images.nameflower!);
  }
}
