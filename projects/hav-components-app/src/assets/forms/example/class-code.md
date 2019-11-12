```typescript
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  formGroup1 = this.fb.group({
    requiredEmail: ['', Validators.required],
    requiredMinMaxLength: [
      'a',
      [Validators.required, Validators.minLength(2), Validators.maxLength(4)]
    ],
    minMax: [2, [Validators.min(3), Validators.max(7)]]
  });

  /**
   * It is prossible to also set some of the validators (required, minLength and email)
   * through input properties in the template and get the same result as in formGroup1.
   * See template example code for more details.
   */
  formGroup2 = this.fb.group({
    requiredEmail: [''],
    requiredMinMaxLength: ['a', Validators.maxLength(4)]
  });

  constructor(private fb: FormBuilder) {}
}
```
