import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdventureRanksRoutingModule } from './adventure-ranks-routing.module';
import { AdventureRanksComponent } from './adventure-ranks.component';


@NgModule({
  declarations: [
    AdventureRanksComponent
  ],
  imports: [
    CommonModule,
    AdventureRanksRoutingModule
  ]
})
export class AdventureRanksModule { }
