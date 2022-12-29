import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeographiesComponent } from './geographies.component';

const routes: Routes = [{ path: '', component: GeographiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeographiesRoutingModule {}
