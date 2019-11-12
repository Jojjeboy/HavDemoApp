import { MarkdownModule } from 'ngx-markdown';
import { GettingStartedComponent } from './getting-started.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HavFormFieldModule } from 'hav-components';
import { HavTextareaModule } from 'hav-components';
import { FormControl } from '@angular/forms';
import { HavButtonModule  } from 'hav-components';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, SharedModule, MarkdownModule.forChild(), ReactiveFormsModule, HavFormFieldModule, HavTextareaModule, HavButtonModule],
  exports: [GettingStartedComponent]
})
export class GettingStartedModule { }
