import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { AnimatedTitleModule } from 'src/app/shared/animated-title/animated-title.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, AnimatedTitleModule],
})
export class CharactersModule {}
