import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enemy } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.scss'],
})
export class EnemiesComponent implements OnInit {
  enemies!: Enemy[];
  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.enemies = this.genshin.getAllEnemies();
  }

  thumb(enemy: Enemy) {
    return this.genshin.imageUrl(enemy.images.nameicon);
  }

  lookup(name: string) {
    this.router.navigate(['/enemy', name]);
  }
}
