```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  smallValue = 'small';
  mediumValue = 'medium';
  largeValue = 'large';

  smallText: string;
  mediumText: string;
  largeText: string;

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
```
