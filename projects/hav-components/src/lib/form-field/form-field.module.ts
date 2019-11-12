import { HavCoreModule } from './../core/hav-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, HavCoreModule],
  exports: [FormFieldComponent]
})
export class HavFormFieldModule {}
