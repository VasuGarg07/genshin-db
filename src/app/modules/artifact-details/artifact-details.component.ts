import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artifact, StatResult } from 'genshin-db';
import { RarityColor } from 'src/app/helpers/enums';
import { Utils } from 'src/app/helpers/utilties';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-artifact-details',
  templateUrl: './artifact-details.component.html',
  styleUrls: ['./artifact-details.component.scss'],
})
export class ArtifactDetailsComponent implements OnInit {
  data!: Artifact;
  artiName!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    name ? (this.artiName = name) : this.router.navigate(['/artifacts']);
  }

  ngOnInit(): void {
    const data = this.genshin.getArtifact(this.artiName);
    if (data) {
      console.log(data);
      this.data =
        typeof data == 'object' && Array.isArray(data) ? data[0] : data;
    } else this.router.navigate(['/artifacts']);
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }

  rarity(el: string) {
    return Utils.starIcon(el);
  }

  image(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }
}
