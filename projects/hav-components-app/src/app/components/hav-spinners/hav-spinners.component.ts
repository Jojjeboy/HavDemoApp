import { Component } from '@angular/core';
import { ComponentProperty, ComponentApi } from '../../../types';
import {
  ExampleTab,
  ExampleTabType
} from '../../shared/example-code-tabs/example-code-tabs.component';

@Component({
  selector: 'app-hav-spinners',
  templateUrl: './hav-spinners.component.html',
  styleUrls: ['./hav-spinners.component.less']
})
export class HavSpinnersComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'pauseAnimation',
      propertyType: 'boolean',
      default: 'false',
      description: 'Set to true to pause the spin animation.'
    },
    {
      propertyName: 'spinnerSize',
      propertyType: 'small | medium | large',
      default: 'medium',
      description: ''
    }
  ];

  spinnerApi: ComponentApi = {
    selector: 'hav-spinner',
    module: {
      name: 'HavSpinnerModule',
      importPath: 'hav-components'
    },
    inputs: this.inputs,
    outputs: [],
    methods: []
  };

  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-spinners/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-spinners/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-spinners/template.md'
    }
  ];

  animationIsPaused = false;

  toggleAnimationPause = () => {
    this.animationIsPaused = !this.animationIsPaused;
  };
}
