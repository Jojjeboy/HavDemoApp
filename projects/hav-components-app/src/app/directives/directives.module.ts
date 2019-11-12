import { CommonModule } from '@angular/common';
import { HavCoreModule } from 'hav-components';
import { MarkdownModule } from 'ngx-markdown';
import { DirectivesRoutingModule } from './directives-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HavFocusOutlineComponent } from './hav-focus-outline/hav-focus-outline.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HavFocusOutlineComponent],
  imports: [
    CommonModule,
    SharedModule,
    DirectivesRoutingModule,
    MarkdownModule.forChild(),
    HavCoreModule
  ],
  exports: []
})
export class DirectivesModule {}
