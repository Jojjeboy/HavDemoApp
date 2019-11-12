import { HavCoreModule } from '../core/hav-core.module';
import {
  AccordionComponent,
  AccordionPanelComponent,
  AccordionPanelHeaderComponent,
  AccordionPanelContentComponent
} from './accordion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelContentComponent
  ],
  imports: [CommonModule, FontAwesomeModule, HavCoreModule],
  exports: [
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelContentComponent
  ]
})
export class HavAccordionModule {}
