import { Component, Input } from '@angular/core';

export interface ExampleTab {
  type: ExampleTabType;
  markdownSourcePath: string;
}

export enum ExampleTabType {
  Module = 'app.module.ts',
  Class = 'app.component.ts',
  Template = 'app.component.html'
}

@Component({
  selector: 'app-example-code-tabs',
  templateUrl: './example-code-tabs.component.html',
  styleUrls: ['./example-code-tabs.component.less']
})
export class ExampleCodeTabsComponent {
  @Input() tabs: ExampleTab[] = [];
  @Input() activeTab?: ExampleTab;

  onTabClick = (tab: ExampleTab) => {
    this.activeTab = tab;
  };

  tabIsActive = (tab: ExampleTab) => this.activeTab.type === tab.type;
}
