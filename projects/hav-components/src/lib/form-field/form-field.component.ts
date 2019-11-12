import {
  Component,
  Input,
  OnInit,
  Optional,
  OnChanges,
  SimpleChanges,
  Self
} from '@angular/core';
import {
  ControlValueAccessor,
  AbstractControl,
  Validators,
  NgControl,
  ValidatorFn
} from '@angular/forms';

const defaultMaxLength = 524288;

@Component({
  selector: 'hav-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.less']
})
export class FormFieldComponent
  implements OnChanges, OnInit, ControlValueAccessor {
  @Input() autocomplete: 'on' | 'off' = 'on';
  @Input() customValidationErrorMessage: string | undefined;
  @Input() disabled = false;
  @Input() disableDefaultValidators = false;
  @Input() hideLabel = false;
  @Input() helperText: string | undefined;
  @Input() label: string | undefined;
  @Input() maxLength: number = defaultMaxLength;
  @Input() minLength = 0;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() type:
    | 'date'
    | 'email'
    | 'number'
    | 'password'
    | 'postalCode'
    | 'search'
    | 'tel'
    | 'text'
    | 'time' = 'text';
  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    if (value !== this.value) {
      this._value = value;
    }
  }
  private _value = '';
  control: AbstractControl | null | undefined;
  validationErrorMessage: string | undefined;

  constructor(@Optional() @Self() public controlDir: NgControl) {
    if (controlDir) {
      controlDir.valueAccessor = this;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.controlDir && this.controlDir.control) {
      /* If Ivy is enabled in the consuming application, this.controlDir will be defined, but
      this.controlDir.control will be undefined. Has no fix yet, await future Angular releases. */
      this.control = this.controlDir.control;
      if (this.control.disabled) {
        this.disabled = true;
      }
      if (!this.disableDefaultValidators) {
        this.setDefaultValidators();
      }
    }
  }

  ngOnInit() {
    if (this.label === undefined) {
      throw new Error('Input property `label` is required.');
    }
    if (this.control) {
      this.control.updateValueAndValidity();
      this.checkForValidationErrors();
    }
  }

  onInput = (value: any) => {
    this._value = value;
    this.onChange(this._value);
    this.checkForValidationErrors();
  };

  writeValue = (obj: any) => {
    this._value = obj;
  };

  registerOnChange = (fn: any): void => {
    this.onChange = fn;
  };

  registerOnTouched = (fn: any): void => {
    this.onTouched = fn;
  };

  setDisabledState = (isDisabled: boolean): void => {
    this.disabled = isDisabled;
  };

  onChange = (value: any) => {
    this._value = value;
  };

  onTouched = () => {};

  setDefaultValidators = () => {
    if (this.control) {
      const validators: ValidatorFn[] = [];
      if (this.type === 'email') {
        validators.push(Validators.email);
      }
      if (this.required) {
        validators.push(Validators.required);
      }
      if (this.minLength > 0) {
        validators.push(Validators.minLength(this.minLength));
      }
      validators.push(this.control.validator || Validators.nullValidator);
      this.control.setValidators(validators);
    }
  };

  checkForValidationErrors = () => {
    if (this.control && this.control.errors) {
      const validationErrorKeys = Object.keys(this.control.errors);
      const validationError =
        validationErrorKeys &&
        validationErrorKeys.length > 0 &&
        validationErrorKeys[0];
      switch (validationError) {
        case 'min':
          this.validationErrorMessage = `Värdet på ${this.label} måste vara minst ${this.control.errors[validationError].min}.`;
          break;
        case 'max':
          this.validationErrorMessage = `Värdet på ${this.label} får vara högst ${this.control.errors[validationError].max}.`;
          break;
        case 'minlength':
          this.validationErrorMessage = `${this.label} måste innehålla minst ${this.control.errors[validationError].requiredLength} tecken.`;
          break;
        case 'maxlength':
          this.validationErrorMessage = `${this.label} får innehålla högst ${this.control.errors[validationError].requiredLength} tecken.`;
          break;
        case 'required':
          // Set the required-property to true to be able to display the validationErrorMessage when the input is blurred but not dirty.
          // This is needed for the case when the required-validator is used and the required-property is not implicitly set.
          this.required = true;
          this.validationErrorMessage = `${this.label} måste fyllas i.`;
          break;
        case 'email':
          this.validationErrorMessage = `E-postadressen måste följa formatet exempel@exempel.`;
          break;
        default:
          this.validationErrorMessage = `Värdet på ${this.label} är inte giltigt.`;
          break;
      }
    } else {
      this.validationErrorMessage = undefined;
    }
  };
}
