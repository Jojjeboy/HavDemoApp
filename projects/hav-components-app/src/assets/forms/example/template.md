```html
<form [formGroup]="formGroup1">
  <!-- Required form field of type 'email' -->
  <hav-form-field
    formControlName="requiredEmail"
    label="Email"
    type="email"
  ></hav-form-field>

  <!-- Required field with Validator.minLength(2), Validator.maxLength(4) -->
  <hav-form-field
    formControlName="requiredMinMaxLength"
    label="Required text"
    helperText="Must have at least 2 characters and at most 4 characters"
  ></hav-form-field>

  <!-- Form field of type 'number' with Validator.min(3), Validator.max(7) -->
  <hav-form-field
    formControlName="minMax"
    label="Number"
    type="number"
    helperText="The input value must be at least 3 and at most 7."
  ></hav-form-field>
</form>

<form [formGroup]="formGroup2">
  <!-- Required form field of type 'email' -->
  <hav-form-field
    formControlName="requiredEmail"
    label="Email"
    type="email"
    [required]="true"
  ></hav-form-field>

  <!-- Required field with Validator.minLength(2), Validator.maxLength(4) -->
  <hav-form-field
    formControlName="requiredMinMaxLength"
    label="Required text"
    helperText="Must have at least 2 characters and at most 4 characters"
    [required]="true"
    [minLength]="2"
  ></hav-form-field>
</form>
```
