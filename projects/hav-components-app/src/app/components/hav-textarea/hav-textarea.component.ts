import { Component } from '@angular/core';
import { ComponentApi, ComponentProperty } from '../../../types';
import { FormControl } from '@angular/forms';
import {
  ExampleTab,
  ExampleTabType
} from '../../shared/example-code-tabs/example-code-tabs.component';

@Component({
  selector: 'app-hav-textarea',
  templateUrl: './hav-textarea.component.html',
  styleUrls: ['./hav-textarea.component.less']
})
export class HavTextareaComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'customValidationErrorMessage',
      propertyType: 'string',
      default: '',
      description:
        'Custom validation error message to display if validation fails.'
    },
    {
      propertyName: 'disabled',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Disables the textarea and sets the value of the aria-disabled attribute.'
    },
    {
      propertyName: 'disableDefaultValidators',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Set to true to skip adding default validators if the textarea is associated with a FormControl.'
    },
    {
      propertyName: 'formControl',
      propertyType: 'FormControl',
      default: '',
      description:
        'Associates the textarea with a FormControl. ' +
        'For more information on FormControls, see the Angular guide about Reactive Forms.'
    },
    {
      propertyName: 'formControlName',
      propertyType: 'string',
      default: '',
      description:
        'Associates the textarea with a FormControl in an existing FormGroup, by using the name of the FormControl. ' +
        'For more information on FormControls, formControlName and FormGroups, see the Angular guide about Reactive Forms.'
    },
    {
      propertyName: 'hideLabel',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Set to true to visually hide the label. Removes the label element from the DOM, but the value of the aria-label attribute will still be set by the label property.'
    },
    {
      propertyName: 'helperText',
      propertyType: 'string',
      default: '',
      description: 'Assistive text to inform the user about the expected input.'
    },
    {
      propertyName: 'label',
      propertyType: 'string',
      default: 'Required',
      description:
        'The label of the textarea. Used both as a visual label and as aria-label. If the label is not set an error will be thrown.'
    },
    {
      propertyName: 'maxLength',
      propertyType: 'number',
      default: '',
      description:
        'The maximum number of characters the user is allowed to enter.If the textarea is associated with a FormControl, the built in validator Validator.maxLength(maxLength) will be added to any existing validators.'
    },
    ,
    {
      propertyName: 'minLength',
      propertyType: 'number',
      default: '0',
      description:
        'The minimum number of characters that should be entered. If the textarea is associated with a FormControl, the built in validator Validator.minLength(minLength) will be added to any existing validators.'
    },
    {
      propertyName: 'readOnly',
      propertyType: 'boolean',
      default: 'false',
      description: ''
    },
    {
      propertyName: 'required',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Marks the textarea as required. Also sets the value of the aria-required attribute. If the textarea is associated with a FormControl, the built in validator Validator.required will be added to any existing validators.'
    },
    {
      propertyName: 'rows',
      propertyType: 'number',
      default: '8',
      description: 'The visible height of the textarea, in lines.'
    },
    {
      propertyName: 'value',
      propertyType: 'string',
      default: '',
      description: 'The value of the textarea input.'
    }
  ];
  textareaApi: ComponentApi = {
    selector: 'hav-textarea',
    module: {
      name: 'HavTextareaModule',
      importPath: 'hav-components'
    },
    inputs: this.inputs,
    outputs: [],
    methods: []
  };

  textarea = new FormControl('');
  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-textarea/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-textarea/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-textarea/template.md'
    }
  ];
}
