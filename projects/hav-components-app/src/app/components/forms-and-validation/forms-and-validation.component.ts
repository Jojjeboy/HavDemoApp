import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {
  ExampleTab,
  ExampleTabType
} from '../../shared/example-code-tabs/example-code-tabs.component';

@Component({
  selector: 'app-forms-and-validation',
  templateUrl: './forms-and-validation.component.html',
  styleUrls: ['./forms-and-validation.component.less']
})
export class FormsAndValidationComponent {
  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/forms/example/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/forms/example/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/forms/example/template.md'
    }
  ];

  formGroup = this.fb.group({
    requiredEmail: ['', Validators.required],
    requiredMinMaxLength: [
      'a',
      [Validators.required, Validators.minLength(2), Validators.maxLength(4)]
    ],
    minMax: [2, [Validators.min(3), Validators.max(7)]]
  });

  constructor(private fb: FormBuilder) {}

  getErrors = (controlName: string): string => {
    const errors = this.formGroup.get(controlName).errors;
    let errorString = 'None, the form control input is valid';
    if (errors) {
      errorString = Object.keys(errors).reduce(
        (e1: string, e2: string, i: number) =>
          i === 0 ? e1.concat(e2) : e1.concat(`, ${e2}`),
        ''
      );
    }
    return errorString;
  };
}
