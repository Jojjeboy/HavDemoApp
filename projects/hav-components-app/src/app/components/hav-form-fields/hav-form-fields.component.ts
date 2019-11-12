import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ComponentApi, ComponentProperty } from '../../../types';
import {
  ExampleTab,
  ExampleTabType
} from '../../shared/example-code-tabs/example-code-tabs.component';

@Component({
  selector: 'app-hav-form-fields',
  templateUrl: './hav-form-fields.component.html',
  styleUrls: ['./hav-form-fields.component.less']
})
export class HavFormFieldsComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'autocomplete',
      propertyType: 'on | off',
      default: 'on',
      description:
        'Whether or not the form field should have autocomplete enabled.'
    },
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
        'Disables the field and sets the value of the aria-disabled attribute.'
    },
    {
      propertyName: 'disableDefaultValidators',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Set to true to skip adding default validators if the field is associated with a FormControl.'
    },
    {
      propertyName: 'formControl',
      propertyType: 'FormControl',
      default: '',
      description:
        'Associates the form field with a FormControl. ' +
        'For more information on FormControls, see the Angular guide about Reactive Forms.'
    },
    {
      propertyName: 'formControlName',
      propertyType: 'string',
      default: '',
      description:
        'Associates the form field with a FormControl in an existing FormGroup, by using the name of the FormControl. ' +
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
        'The label of the form field. Used both as a visual label and as aria-label. If the label is not set an error will be thrown.'
    },
    {
      propertyName: 'maxLength',
      propertyType: 'number',
      default: '524288',
      description: 'The maximum number of characters possible to enter.'
    },
    ,
    {
      propertyName: 'minLength',
      propertyType: 'number',
      default: '0',
      description:
        'The minimum number of characters that should be entered. If the field is associated with a FormControl, the built in validator Validator.minLength(minLength) will be added to any existing validators.'
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
        'Marks the field as required. Also sets the value of the aria-required attribute. ' +
        'If the field is associated with a FormControl, the built in validator Validator.required ' +
        'will be added to any existing validators of the control.'
    },
    {
      propertyName: 'type',
      propertyType:
        'date | email | number | password | postalCode | search | tel | text | time',
      default: 'text',
      description:
        'Sets the input type. Date, email, number, password, search, tel, ' +
        'text and time sets the type of the native input element. ' +
        'The postalCode type is a text input field, but of lesser width than a regular text field. ' +
        'If the email type is used when a field is associated with a FormControl, ' +
        'the built in validator Validator.email will be added to any existing validators of the control.'
    },
    {
      propertyName: 'value',
      propertyType: 'string',
      default: '',
      description: 'The value of the field input.'
    }
  ];

  formFieldApi: ComponentApi = {
    selector: 'hav-form-field',
    module: {
      name: 'HavFormFieldModule',
      importPath: 'hav-components'
    },
    inputs: this.inputs,
    outputs: [],
    methods: []
  };

  formGroup = this.fb.group({
    textInput: [''],
    pwdInput: [''],
    postalCodeInput: ['425 42', Validators.maxLength(6)],
    phoneInput: ['+4673 123 45 67', Validators.minLength(5)],
    numberInput: ['', [Validators.min(3), Validators.max(5)]],
    emailInput: ['epost@epost.hej']
  });
  searchText = 'Sök här';
  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-form-fields/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-form-fields/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-form-fields/template.md'
    }
  ];

  constructor(private fb: FormBuilder) {}

  onSearchInput = (value: string) => {
    this.searchText = value;
  };
}
