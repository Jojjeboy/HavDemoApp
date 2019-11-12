import {
  ExampleTab,
  ExampleTabType
} from './../../shared/example-code-tabs/example-code-tabs.component';
import { Component } from '@angular/core';
import { ComponentProperty, ComponentApi } from '../../../types';

@Component({
  selector: 'app-hav-buttons',
  templateUrl: './hav-buttons.component.html',
  styleUrls: ['./hav-buttons.component.less']
})
export class HavButtonsComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'disabled',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Sets the value of the aria-disabled attribute and toggles the enabled/disabled button style.'
    },
    {
      propertyName: 'style',
      propertyType: 'object',
      default: '',
      description: 'Override styling with inline styles'
    },
    {
      propertyName: 'buttonType',
      propertyType: 'primary | secondary',
      default: 'primary',
      description: ''
    },
    {
      propertyName: 'buttonSize',
      propertyType: 'small | medium | large',
      default: 'medium',
      description: ''
    },
    {
      propertyName: 'isSubmitButton',
      propertyType: 'boolean',
      default: 'false',
      description: 'Set to true if the button should submit form data.'
    }
  ];

  private outputs = [
    {
      propertyName: 'click',
      propertyType: 'EventEmitter<MouseEvent | KeyboardEvent>',
      default: '',
      description:
        'Event emitted when the user triggers a button click using the mouse, the spacebar or the enter key.'
    }
  ];

  buttonApi: ComponentApi = {
    selector: 'hav-button',
    module: {
      name: 'HavButtonModule',
      importPath: 'hav-components'
    },
    inputs: this.inputs,
    outputs: this.outputs,
    methods: []
  };

  buttonClickedText: string;
  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-buttons/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-buttons/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-buttons/template.md'
    }
  ];

  onClick = (text: string) => {
    this.buttonClickedText = text;
  };
}
