import { ExampleCodeTabsComponent } from './../example-code-tabs/example-code-tabs.component';
import {
  Component,
  Input,
  OnInit,
  ContentChild,
  AfterContentInit,
  HostBinding
} from '@angular/core';
import { ComponentApi, ComponentProperty } from '../../../types';
import { TableRow } from './table/table.component';

export const COMPONENT_API_COL_NAMES = [
  'Property name',
  'Type',
  'Default',
  'Description'
];

@Component({
  selector: 'app-documentation-example',
  template: '<ng-content></ng-content>',
  styles: [':host { display: flex; }']
})
export class DocumentationExampleComponent {}

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.less']
})
export class DocumentationComponent implements OnInit, AfterContentInit {
  @Input() api?: ComponentApi;
  @Input() alternativeTitle: undefined | string = undefined;
  @Input() showModuleImport = true;
  @Input() showSelector = true;
  @Input() language = 'en';
  @HostBinding('attr.lang') get htmlLang() {
    return this.language;
  }
  @ContentChild(DocumentationExampleComponent, { static: false })
  private docExample: DocumentationExampleComponent;
  @ContentChild(ExampleCodeTabsComponent, { static: false })
  private codeExample: ExampleCodeTabsComponent;
  inputTableRows: TableRow[] = [];
  outputTableRows: TableRow[] = [];
  methodTableRows: TableRow[] = [];
  headerNames: string[] = COMPONENT_API_COL_NAMES;
  moduleData?: string;
  showExample = true;
  showCode = true;
  hasNoProperties = false;

  ngOnInit(): void {
    if (this.api) {
      this.apiToTableData(this.api);
      this.moduleData = `${'```typescript \nimport { '} ${
        this.api.module.name
      } ${" } from '"}${this.api.module.importPath}${"'; \n```"}`;
      this.hasNoProperties =
        this.api.inputs.length === 0 &&
        this.api.methods.length === 0 &&
        this.api.outputs.length === 0;
    }
  }

  ngAfterContentInit() {
    this.showExample = !!this.docExample;
    this.showCode = !!this.codeExample;
  }

  apiToTableData = (api: ComponentApi) => {
    api.inputs.forEach((prop: ComponentProperty) => {
      this.inputTableRows.push(this.propertyToRow(prop));
    });
    api.outputs.forEach((prop: ComponentProperty) => {
      this.outputTableRows.push(this.propertyToRow(prop));
    });
    api.methods.forEach((prop: ComponentProperty) => {
      this.methodTableRows.push(this.propertyToRow(prop));
    });
  };

  propertyToRow = (prop: ComponentProperty): TableRow => ({
    columns: [
      prop.propertyName,
      prop.propertyType,
      prop.default,
      prop.description
    ]
  });
}
