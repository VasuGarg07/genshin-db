import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponDetailsRoutingModule } from './weapon-details-routing.module';
import { WeaponDetailsComponent } from './weapon-details.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [WeaponDetailsComponent],
  imports: [CommonModule, WeaponDetailsRoutingModule, MatIconModule],
})
export class WeaponDetailsModule {}
