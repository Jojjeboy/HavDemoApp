import { MarkdownModule } from 'ngx-markdown';
import { TableComponent } from './documentation/table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DocumentationComponent,
  DocumentationExampleComponent
} from './documentation/documentation.component';
import { HavAccordionModule } from 'hav-components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleCodeTabsComponent } from './example-code-tabs/example-code-tabs.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    DocumentationExampleComponent,
    TableComponent,
    ExampleCodeTabsComponent
  ],
  imports: [
    CommonModule,
    HavAccordionModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MarkdownModule.forChild()
  ],
  exports: [
    DocumentationComponent,
    DocumentationExampleComponent,
    HavAccordionModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ExampleCodeTabsComponent
  ]
})
export class SharedModule {}
