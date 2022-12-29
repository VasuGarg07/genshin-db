import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnemyDetailsComponent } from './enemy-details.component';

const routes: Routes = [{ path: '', component: EnemyDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnemyDetailsRoutingModule {}
