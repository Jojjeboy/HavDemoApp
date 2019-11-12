import { Component, ViewChild } from '@angular/core';
import { AccordionComponent } from 'hav-components';
import {
  IconDefinition,
  faKiwiBird,
  faSkullCrossbones,
  faAnchor,
  faBug
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.less']
})
export class AccordionExampleComponent {
  @ViewChild(AccordionComponent, { static: false })
  accordion: AccordionComponent;
  kiwiBirdIcon: IconDefinition = faKiwiBird;
  skullIcon: IconDefinition = faSkullCrossbones;
  anchorIcon: IconDefinition = faAnchor;
  bugIcon: IconDefinition = faBug;
  allIsExpanded = false;

  toggleExpandAll = () => {
    if (this.accordion) {
      if (this.allIsExpanded) {
        this.accordion.closeAll();
      } else {
        this.accordion.expandAll();
      }
    }
    this.allIsExpanded = !this.allIsExpanded;
  };
}
