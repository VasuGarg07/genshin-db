import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographiesRoutingModule } from './geographies-routing.module';
import { GeographiesComponent } from './geographies.component';


@NgModule({
  declarations: [
    GeographiesComponent
  ],
  imports: [
    CommonModule,
    GeographiesRoutingModule
  ]
})
export class GeographiesModule { }
