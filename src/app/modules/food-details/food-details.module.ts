import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailsRoutingModule } from './food-details-routing.module';
import { FoodDetailsComponent } from './food-details.component';


@NgModule({
  declarations: [
    FoodDetailsComponent
  ],
  imports: [
    CommonModule,
    FoodDetailsRoutingModule
  ]
})
export class FoodDetailsModule { }
