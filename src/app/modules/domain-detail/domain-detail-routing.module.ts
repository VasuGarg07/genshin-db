import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainDetailComponent } from './domain-detail.component';

const routes: Routes = [{ path: '', component: DomainDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainDetailRoutingModule {}
