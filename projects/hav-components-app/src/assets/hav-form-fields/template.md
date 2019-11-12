```html
<form [formGroup]="formGroup">
  <hav-form-field
    [required]="true"
    formControlName="textInput"
    label="Obligatoriskt textfält"
  ></hav-form-field>
  <hav-form-field
    #searchField
    label="Sökfält"
    type="search"
    [value]="searchText"
    (input)="onSearchInput(searchField.value)"
  ></hav-form-field>
  <hav-form-field
    label="Lösenord"
    formControlName="pwdInput"
    type="password"
  ></hav-form-field>
  <hav-form-field
    formControlName="postalCodeInput"
    label="Postkod"
    type="postalCode"
  ></hav-form-field>
  <hav-form-field
    formControlName="phoneInput"
    label="Telefonnummer"
    type="tel"
  ></hav-form-field>
  <hav-form-field
    formControlName="numberInput"
    helperText="Fyll i en siffra mellan 3 och 5."
    label="Nummer"
    type="number"
  ></hav-form-field>
  <hav-form-field
    formControlName="emailInput"
    label="Email"
    type="email"
  ></hav-form-field>
  <hav-form-field label="Inaktiverat fält" [disabled]="true"></hav-form-field>
</form>
```
