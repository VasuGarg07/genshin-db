import { Component, OnInit } from '@angular/core';
import { WindGlider } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-windgliders',
  templateUrl: './windgliders.component.html',
  styleUrls: ['./windgliders.component.scss'],
})
export class WindglidersComponent implements OnInit {
  gliders!: WindGlider[];
  constructor(private genshin: GenshinService) {}

  ngOnInit(): void {
    this.gliders = this.genshin.windGliders();
  }

  thumb(glider: WindGlider) {
    return this.genshin.imageUrl(glider.images.namegacha);
  }

  starRank(el: string) {
    return '★'.repeat(parseInt(el));
  }
}
