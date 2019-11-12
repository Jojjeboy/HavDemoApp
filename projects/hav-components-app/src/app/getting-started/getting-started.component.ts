import { Component } from '@angular/core';
import { peerDependencies } from 'projects/hav-components/package.json';
import { Validators, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less']
})
export class GettingStartedComponent {
  private keys = Object.keys(peerDependencies);
  private versions = '';
  dependencies = '';
  textarea = new FormControl('');
  formGroup = this.fb.group({
    firstname: [''],
    lastname: [''],
    pwdInput: [''],
    textarea: [''],
    postalCodeInput: ['425 42', Validators.maxLength(6)],
    phoneInput: ['+4673 123 45 67', Validators.minLength(5)],
    numberInput: ['', [Validators.min(3), Validators.max(5)]],
    emailInput: ['epost@epost.hej']
  });

  onClick() {
    alert("Hej " + this.formGroup.value.firstname + " " + this.formGroup.value.lastname);
  }

  constructor(private fb: FormBuilder) {
    this.keys.forEach((key: string, i: number) => {
      this.versions = `${this.versions}${
        i < this.keys.length && i > 0 ? ',' : ''
      }\n  "${key}":"${peerDependencies[key]}"`;
    });

    this.dependencies = `${'```typescript \n'} peerDependencies: {${
      this.versions
    }\n}${'\n```'}`;
  }
}
