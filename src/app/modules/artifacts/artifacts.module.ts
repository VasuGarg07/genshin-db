import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactsRoutingModule } from './artifacts-routing.module';
import { ArtifactsComponent } from './artifacts.component';


@NgModule({
  declarations: [
    ArtifactsComponent
  ],
  imports: [
    CommonModule,
    ArtifactsRoutingModule
  ]
})
export class ArtifactsModule { }
