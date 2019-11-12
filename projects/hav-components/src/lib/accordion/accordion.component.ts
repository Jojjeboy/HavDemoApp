import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  HostBinding
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';
import {
  IconDefinition,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

let uniqueHeaderId = 0;
let uniquePanelId = 0;

@Component({
  selector: 'hav-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.less'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('collapsed => expanded', [
        animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('expanded => collapsed, void => collapsed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('flipChevron', [
      state('collapsed', style({ transform: 'rotateX(0deg)' })),
      state('expanded', style({ transform: 'rotateX(180deg)' })),
      transition('collapsed <=> expanded', animate('200ms'))
    ])
  ]
})
export class AccordionPanelComponent {
  @Input() isExpanded = false;
  @Input() iconAsToggleTrigger = false;
  expansionToggleButton: IconDefinition = faChevronDown;
  readonly headerId = `hav-accordion-panel-header-${uniqueHeaderId++}`;
  readonly id = `hav-accordion-panel-${uniquePanelId++}`;
  @HostBinding('class.expanded') get expanded() {
    return this.isExpanded;
  }

  @HostBinding('attr.aria-expanded') get ariaExpanded() {
    return this.isExpanded;
  }

  expand = () => {
    this.isExpanded = true;
  };

  collapse = () => {
    this.isExpanded = false;
  };

  toggle = () => {
    this.isExpanded = !this.isExpanded;
  };

  onClick = (event: MouseEvent) => {
    this.handleToggle(event);
  };

  onKeyUp = (event: KeyboardEvent) => {
    this.handleToggle(event);
  };

  onKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  private handleToggle = (event: KeyboardEvent | MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.toggle();
  };
}

@Component({
  selector: 'hav-accordion-panel-header',
  template: '<ng-content></ng-content>'
})
export class AccordionPanelHeaderComponent {}

@Component({
  selector: 'hav-accordion-panel-content',
  template: '<ng-content></ng-content>'
})
export class AccordionPanelContentComponent {}

@Component({
  selector: 'hav-accordion',
  template: '<ng-content></ng-content>',
  styleUrls: ['./accordion.component.less']
})
export class AccordionComponent {
  @ContentChildren(AccordionPanelComponent) panels?: QueryList<
    AccordionPanelComponent
  >;

  expandAll = () => {
    if (this.panels) {
      this.panels.map((panel: AccordionPanelComponent) => panel.expand());
    }
  };

  closeAll = () => {
    if (this.panels) {
      this.panels.map((panel: AccordionPanelComponent) => panel.collapse());
    }
  };
}
