import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureRanksComponent } from './adventure-ranks.component';

const routes: Routes = [{ path: '', component: AdventureRanksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRanksRoutingModule {}
