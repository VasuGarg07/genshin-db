import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtifactDetailsRoutingModule } from './artifact-details-routing.module';
import { ArtifactDetailsComponent } from './artifact-details.component';


@NgModule({
  declarations: [
    ArtifactDetailsComponent
  ],
  imports: [
    CommonModule,
    ArtifactDetailsRoutingModule
  ]
})
export class ArtifactDetailsModule { }
