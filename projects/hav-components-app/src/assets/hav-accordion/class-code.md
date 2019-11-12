```typescript
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(AccordionComponent)
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
```
