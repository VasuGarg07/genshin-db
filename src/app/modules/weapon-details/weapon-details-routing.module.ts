import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponDetailsComponent } from './weapon-details.component';

const routes: Routes = [{ path: '', component: WeaponDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponDetailsRoutingModule {}
