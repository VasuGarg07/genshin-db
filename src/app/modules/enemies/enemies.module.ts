import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnemiesRoutingModule } from './enemies-routing.module';
import { EnemiesComponent } from './enemies.component';


@NgModule({
  declarations: [
    EnemiesComponent
  ],
  imports: [
    CommonModule,
    EnemiesRoutingModule
  ]
})
export class EnemiesModule { }
