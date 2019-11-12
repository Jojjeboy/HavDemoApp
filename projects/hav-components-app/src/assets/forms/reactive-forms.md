Alla formulärkomponenter (checkbox, form-field, textarea osv.) i hav-components går att använda i
[reactive forms](https://angular.io/guide/reactive-forms). De är inte testade i template-driven forms ännu.

Angular har vissa inbyggda standard-[valideringsfunktioner](https://angular.io/api/forms/Validators). Om form-fields eller textareas från komponentbiblioteket används i reactive forms med vissa av Angulars valideringsfunktioner, kommer ett standardfelmeddelande att skrivas ut om formulärinputen bryter mot valideringsregeln. För mer detaljer se respektive komponent.

<br>

**_Följande valideringsfunktioner har standardfelmeddelanden i form-field-komponenten:_**

```typescript
  static min(min: number): ValidatorFn;
  static max(max: number): ValidatorFn;
  static required(control: AbstractControl): ValidationErrors | null;
  static email(control: AbstractControl): ValidationErrors | null;
  static minLength(minLength: number): ValidatorFn;
  static maxLength(maxLength: number): ValidatorFn;
```

<br>

**_Följande valideringsfunktioner har standardfelmeddelanden i textarea-komponenten:_**

```typescript
  static required(control: AbstractControl): ValidationErrors | null;
  static minLength(minLength: number): ValidatorFn;
  static maxLength(maxLength: number): ValidatorFn;
```

<br>
Standardfelmeddelandena går att ersätta med ett eget vid behov.
Vissa av valideringsfunktionerna kommer att läggas till automatiskt om vissa input-properties används. Detta beteende går att stänga av. Se API för respektive komponent över vilka properties som kan användas till detta.
