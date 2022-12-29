import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnemyDetailsRoutingModule } from './enemy-details-routing.module';
import { EnemyDetailsComponent } from './enemy-details.component';


@NgModule({
  declarations: [
    EnemyDetailsComponent
  ],
  imports: [
    CommonModule,
    EnemyDetailsRoutingModule
  ]
})
export class EnemyDetailsModule { }
