import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsComponent } from './weapons.component';

const routes: Routes = [{ path: '', component: WeaponsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponsRoutingModule {}
