import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food-details.component';

const routes: Routes = [{ path: '', component: FoodDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDetailsRoutingModule {}
