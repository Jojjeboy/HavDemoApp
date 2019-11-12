import { HavCoreModule } from '../core/hav-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [CommonModule, HavCoreModule],
  exports: [TextareaComponent]
})
export class HavTextareaModule {}
