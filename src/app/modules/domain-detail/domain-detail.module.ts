import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainDetailRoutingModule } from './domain-detail-routing.module';
import { DomainDetailComponent } from './domain-detail.component';


@NgModule({
  declarations: [
    DomainDetailComponent
  ],
  imports: [
    CommonModule,
    DomainDetailRoutingModule
  ]
})
export class DomainDetailModule { }
