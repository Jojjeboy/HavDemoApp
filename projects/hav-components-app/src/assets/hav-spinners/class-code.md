```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  animationIsPaused = false;

  toggleAnimationPause = () => {
    this.animationIsPaused = !this.animationIsPaused;
  };
}
```
