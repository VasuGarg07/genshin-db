import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './trim-text.pipe';

@NgModule({
  declarations: [TrimTextPipe],
  imports: [CommonModule],
  exports: [TrimTextPipe],
})
export class TrimTextModule {}
