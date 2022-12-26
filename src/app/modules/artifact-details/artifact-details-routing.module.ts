import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtifactDetailsComponent } from './artifact-details.component';

const routes: Routes = [{ path: '', component: ArtifactDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtifactDetailsRoutingModule {}
