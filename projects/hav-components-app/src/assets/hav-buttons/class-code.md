```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  buttonClickedText: string;

  onClick = (text: string) => {
    this.buttonClickedText = text;
  };
}
```
