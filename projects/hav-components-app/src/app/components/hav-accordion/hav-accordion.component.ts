import {
  ExampleTab,
  ExampleTabType
} from './../../shared/example-code-tabs/example-code-tabs.component';
import { Component } from '@angular/core';
import { ComponentApi, ComponentProperty } from '../../../types';

@Component({
  selector: 'app-hav-accordion',
  templateUrl: './hav-accordion.component.html',
  styleUrls: ['./hav-accordion.component.less']
})
export class HavAccordionComponent {
  private accordionMethods: ComponentProperty[] = [
    {
      propertyName: 'collapseAll',
      propertyType: '() => void',
      description: 'Minimera alla AccordionPanels.'
    },
    {
      propertyName: 'expandAll',
      propertyType: '() => void',
      description: 'Expandera alla AccordionPanels.'
    }
  ];

  private module = {
    name: 'HavAccordionModule',
    importPath: 'hav-components'
  };

  accordionApi: ComponentApi = {
    selector: 'hav-accordion',
    module: this.module,
    inputs: [],
    outputs: [],
    methods: this.accordionMethods
  };

  private accordionPanelInputs: ComponentProperty[] = [
    {
      propertyName: 'isExpanded',
      propertyType: 'boolean',
      default: 'false',
      description: 'Whether the AccordionPanel is expanded'
    },
    {
      propertyName: 'iconAsToggleTrigger',
      propertyType: 'boolean',
      default: 'false',
      description:
        'Set to true to trigger expansion only when the chevron icon is clicked.' +
        'Default behaviour is to expand the panel when the user clicks anywhere inside the AccordionPanelHeader.'
    }
  ];

  private accordionPanelMethods: ComponentProperty[] = [
    {
      propertyName: 'collapse',
      propertyType: '() => void',
      description: 'Sets the expanded state of the AccordionPanel to false.'
    },
    {
      propertyName: 'expand',
      propertyType: '() => void',
      description: 'Sets the expanded state of the AccordionPanel to true.'
    },
    {
      propertyName: 'toggle',
      propertyType: '() => void',
      description: 'Toggles the expanded state of the AccordionPanel'
    }
  ];

  accordionPanelApi: ComponentApi = {
    selector: 'hav-accordion-panel',
    module: this.module,
    inputs: this.accordionPanelInputs,
    outputs: [],
    methods: this.accordionPanelMethods
  };

  accordionPanelHeaderApi: ComponentApi = {
    selector: 'hav-accordion-panel-header',
    module: this.module,
    inputs: [],
    outputs: [],
    methods: []
  };

  accordionPanelContentApi: ComponentApi = {
    selector: 'hav-accordion-panel-content',
    module: this.module,
    inputs: [],
    outputs: [],
    methods: []
  };

  moduleImportData = `${'```typescript \nimport { '} ${
    this.module.name
  } ${" } from '"}${this.module.importPath}${"'; \n```"}`;

  codeTabs: ExampleTab[] = [
    {
      type: ExampleTabType.Module,
      markdownSourcePath: 'assets/hav-accordion/module.md'
    },
    {
      type: ExampleTabType.Class,
      markdownSourcePath: 'assets/hav-accordion/class-code.md'
    },
    {
      type: ExampleTabType.Template,
      markdownSourcePath: 'assets/hav-accordion/template.md'
    }
  ];
}
