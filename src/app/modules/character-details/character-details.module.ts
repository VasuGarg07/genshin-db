import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AnimatedTitleModule } from 'src/app/shared/animated-title/animated-title.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    MatTabsModule,
    AnimatedTitleModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CharacterDetailsModule {}
