import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindglidersComponent } from './windgliders.component';

const routes: Routes = [{ path: '', component: WindglidersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WindglidersRoutingModule {}
