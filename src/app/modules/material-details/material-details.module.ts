import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDetailsRoutingModule } from './material-details-routing.module';
import { MaterialDetailsComponent } from './material-details.component';


@NgModule({
  declarations: [
    MaterialDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialDetailsRoutingModule
  ]
})
export class MaterialDetailsModule { }
