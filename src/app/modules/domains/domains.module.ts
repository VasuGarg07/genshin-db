import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { DomainsComponent } from './domains.component';


@NgModule({
  declarations: [
    DomainsComponent
  ],
  imports: [
    CommonModule,
    DomainsRoutingModule
  ]
})
export class DomainsModule { }
