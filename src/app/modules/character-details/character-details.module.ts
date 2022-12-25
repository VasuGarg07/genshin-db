import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CharacterDetailsModule {}
