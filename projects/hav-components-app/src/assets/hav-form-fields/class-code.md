```typescript
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formGroup = this.fb.group({
    textInput: ['Valfri textinput'],
    pwdInput: [''],
    postalCodeInput: ['425 42', Validators.maxLength(6)],
    phoneInput: ['+4673 123 45 67', Validators.minLength(5)],
    numberInput: ['', [Validators.min(3), Validators.max(5)]],
    emailInput: ['epost@epost.hej']
  });
  searchText = 'Sök här';

  constructor(private fb: FormBuilder) {}

  onSearchInput = (value: string) => {
    this.searchText = value;
  };
```
