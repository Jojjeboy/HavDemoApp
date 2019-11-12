import { FormsAndValidationComponent } from './forms-and-validation/forms-and-validation.component';
import { UsageComponent } from './usage/usage.component';
import { HavButtonsComponent } from './hav-buttons/hav-buttons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HavAccordionComponent } from './hav-accordion/hav-accordion.component';
import { HavCheckboxesComponent } from './hav-checkboxes/hav-checkboxes.component';
import { HavFormFieldsComponent } from './hav-form-fields/hav-form-fields.component';
import { HavSpinnersComponent } from './hav-spinners/hav-spinners.component';
import { HavTextareaComponent } from './hav-textarea/hav-textarea.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forms', component: FormsAndValidationComponent },
      { path: 'usage', component: UsageComponent },
      { path: 'accordion', component: HavAccordionComponent },
      { path: 'buttons', component: HavButtonsComponent },
      { path: 'checkboxes', component: HavCheckboxesComponent },
      { path: 'formfields', component: HavFormFieldsComponent },
      { path: 'spinners', component: HavSpinnersComponent },
      { path: 'textarea', component: HavTextareaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
