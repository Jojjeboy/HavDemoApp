import { Component } from '@angular/core';
import { ComponentApi, ComponentProperty } from '../../../types';
import {
  ExampleTab,
  ExampleTabType
} from '../../shared/example-code-tabs/example-code-tabs.component';

@Component({
  selector: 'app-hav-checkboxes',
  templateUrl: './hav-checkboxes.component.html',
  styleUrls: ['./hav-checkboxes.component.less']
})
export class HavCheckboxesComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'checkboxSize',
      propertyType: 'small | medium | large',
      default: 'medium',
      description: ''
    },
    {
      propertyName: 'checked',
      propertyType: 'boolean',
      default: 'false',
      description: 'Whether the checkbox is checked.'
    },
    {
      propertyName: 'disabled',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Sets the value of the aria-disabled attribute and toggles the enabled/disabled checkbox style.'
    },
    {
      propertyName: 'formControl',
      propertyType: 'FormControl',
      default: '',
      description:
        'Associates the checkbox with a FormControl. ' +
        'For more information on FormControls, see the Angular guide about Reactive Forms.'
    },
    {
      propertyName: 'formControlName',
      propertyType: 'string',
      default: '',
      description:
        'Associates the checkbox with a FormControl in an existing FormGroup, by using the name of the FormControl. ' +
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
      propertyName: 'label',
      propertyType: 'string',
      default: 'Required',
      description:
        'The label of the checkbox. Used both as a visual label and as aria-label. If the label is not set an error will be thrown.'
    },
    {
      propertyName: 'requiredTrue',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Marks the checkbox as required to check. Also sets the value of the aria-required attribute. If the checkbox is associated with a FormControl, the built in validator Validator.requiredTrue will be added to any existing validators.'
    }
  ];

  private outputs: ComponentProperty[] = [
    {
      propertyName: 'check',
      propertyType: 'EventEmitter<boolean>',
      default: '',
      description: 'Event emitted when the checked value of a checkbox changes.'
    }
  ];

  checkboxApi: ComponentApi = {
    selector: 'hav-checkbox',
    module: {
      name: 'HavCheckboxModule',
      importPath: 'hav-components'
    },
    inputs: this.inputs,
    outputs: this.outputs,
    methods: []
  };

  smallValue = 'small';
  mediumValue = 'medium';
  largeValue = 'large';

  smallText: string;
  mediumText: string;
  largeText: string;

  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-checkboxes/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-checkboxes/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-checkboxes/template.md'
    }
  ];

  onCheck = (checked: boolean, value: any) => {
    switch (value) {
      case this.smallValue:
        this.smallText = `The small checkbox was ${
          checked ? 'checked' : 'unchecked'
        }`;
        break;
      case this.mediumValue:
        this.mediumText = `The medium checkbox was ${
          checked ? 'checked' : 'unchecked'
        }`;
        break;
      default:
        this.largeText = `The large checkbox was ${
          checked ? 'checked' : 'unchecked'
        }`;
        break;
    }
  };
}
