import { Component, OnInit } from '@angular/core';
import { Geography } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-geographies',
  templateUrl: './geographies.component.html',
  styleUrls: ['./geographies.component.scss'],
})
export class GeographiesComponent implements OnInit {
  areas!: Geography[];
  constructor(private genshin: GenshinService) {}

  ngOnInit(): void {
    this.areas = this.genshin.getGameAreas();
    console.log(this.areas);
  }

  thumb(area: Geography) {
    return this.genshin.imageUrl(area.images.nameimage);
  }
}
