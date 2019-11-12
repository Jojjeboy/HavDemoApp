import { HavCoreModule } from '../core/hav-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, HavCoreModule],
  exports: [ButtonComponent]
})
export class HavButtonModule {}
