import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, CharacterDetailsRoutingModule, MatTabsModule],
})
export class CharacterDetailsModule {}
