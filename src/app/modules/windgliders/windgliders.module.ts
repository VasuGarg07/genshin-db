import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindglidersRoutingModule } from './windgliders-routing.module';
import { WindglidersComponent } from './windgliders.component';


@NgModule({
  declarations: [
    WindglidersComponent
  ],
  imports: [
    CommonModule,
    WindglidersRoutingModule
  ]
})
export class WindglidersModule { }
