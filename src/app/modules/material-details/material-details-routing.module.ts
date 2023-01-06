import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDetailsComponent } from './material-details.component';

const routes: Routes = [{ path: '', component: MaterialDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDetailsRoutingModule {}
