import {
  ExampleTab,
  ExampleTabType
} from './../../shared/example-code-tabs/example-code-tabs.component';
import { Component } from '@angular/core';
import { ComponentProperty, ComponentApi } from '../../../types';

@Component({
  selector: 'app-hav-focus-outline',
  templateUrl: './hav-focus-outline.component.html',
  styleUrls: ['./hav-focus-outline.component.less']
})
export class HavFocusOutlineComponent {
  private inputs: ComponentProperty[] = [
    {
      propertyName: 'outline',
      propertyType: 'string',
      description:
        'The outline to use. Valid values are any valid CSS outline ' +
        'shorthand property value.',
      default: 'solid 2px #eaa00e'
    },
    {
      propertyName: 'addFocusOutlineOnTabKeyboardEvent',
      propertyType: 'boolean',
      description:
        'If set to true the outline is applied on tab key up instead of on ' +
        'focusin. Useful for example when using the directive on elements ' +
        'that receive focus on click events, which is not always desirable.',
      default: 'false'
    },
    {
      propertyName: 'outlineOffsetInsideElement',
      propertyType: 'boolean',
      description:
        'Set to true to set the outline offset to -2px. ' +
        'If the default outline is used, this will place the outline inside ' +
        'the host element borders. Can be useful in cases when surrounding elements ' +
        'covers the outline. If a wider (> 2px) custom outline is used, ' +
        'try a different approach.',
      default: 'false'
    }
  ];

  focusOutlineApi: ComponentApi = {
    module: {
      name: 'HavCoreModule',
      importPath: 'hav-components'
    },
    selector: 'havFocusOutline',
    inputs: this.inputs,
    outputs: [],
    methods: []
  };

  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-focus-outline/module.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-focus-outline/template.md'
    }
  ];
}
