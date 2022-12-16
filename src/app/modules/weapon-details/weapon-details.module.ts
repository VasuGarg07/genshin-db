import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponDetailsRoutingModule } from './weapon-details-routing.module';
import { WeaponDetailsComponent } from './weapon-details.component';
import { AnimatedTitleModule } from 'src/app/shared/animated-title/animated-title.module';

@NgModule({
  declarations: [WeaponDetailsComponent],
  imports: [CommonModule, WeaponDetailsRoutingModule, AnimatedTitleModule],
})
export class WeaponDetailsModule {}
