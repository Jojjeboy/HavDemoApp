import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusOutlineDirective } from './focus-outline.directive';

@NgModule({
  declarations: [FocusOutlineDirective],
  imports: [CommonModule],
  exports: [FocusOutlineDirective]
})
export class HavCoreModule {}
