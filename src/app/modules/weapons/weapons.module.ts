import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsComponent } from './weapons.component';
import { AnimatedTitleModule } from 'src/app/shared/animated-title/animated-title.module';

@NgModule({
  declarations: [WeaponsComponent],
  imports: [CommonModule, WeaponsRoutingModule, AnimatedTitleModule],
})
export class WeaponsModule {}
