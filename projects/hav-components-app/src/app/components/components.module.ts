import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HavButtonsComponent } from './hav-buttons/hav-buttons.component';
import { HavFormFieldsComponent } from './hav-form-fields/hav-form-fields.component';
import { HavCheckboxesComponent } from './hav-checkboxes/hav-checkboxes.component';
import { HavTextareaComponent } from './hav-textarea/hav-textarea.component';
import { HavSpinnersComponent } from './hav-spinners/hav-spinners.component';
import { HavAccordionComponent } from './hav-accordion/hav-accordion.component';
import {
  HavFormFieldModule,
  HavButtonModule,
  HavCheckboxModule,
  HavTextareaModule,
  HavSpinnerModule
} from 'hav-components';
import { AccordionExampleComponent } from './hav-accordion/accordion-example/accordion-example.component';
import { UsageComponent } from './usage/usage.component';
import { FormsAndValidationComponent } from './forms-and-validation/forms-and-validation.component';

@NgModule({
  declarations: [
    HavAccordionComponent,
    AccordionExampleComponent,
    HavButtonsComponent,
    HavCheckboxesComponent,
    HavFormFieldsComponent,
    HavSpinnersComponent,
    HavTextareaComponent,
    UsageComponent,
    FormsAndValidationComponent
  ],
  imports: [
    CommonModule,
    HavButtonModule,
    HavCheckboxModule,
    HavFormFieldModule,
    HavSpinnerModule,
    HavTextareaModule,
    MarkdownModule.forChild(),
    SharedModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {}
