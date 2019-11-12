import {
  Component,
  OnInit,
  Input,
  Optional,
  Self,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  AbstractControl,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'hav-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.less']
})
export class TextareaComponent
  implements OnChanges, OnInit, ControlValueAccessor {
  @Input() customValidationErrorMessage: string | undefined;
  @Input() disabled = false;
  @Input() disableDefaultValidators = false;
  @Input() hideLabel = false;
  @Input() helperText = '';
  @Input() label: string | undefined;
  @Input() maxLength: number | undefined = undefined;
  @Input() minLength = 0;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() rows = 8;

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
  nbrOfCharacters = 0;
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
    }
    this.nbrOfCharacters = this.value.length;
    this.checkForValidationErrors();
  }

  onInput = (value: any) => {
    this._value = value;
    this.nbrOfCharacters = value.length;
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
      if (this.required) {
        validators.push(Validators.required);
      }
      if (this.minLength > 0) {
        validators.push(Validators.minLength(this.minLength));
      }
      if (this.maxLength !== undefined) {
        validators.push(Validators.maxLength(this.maxLength));
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
        default:
          this.validationErrorMessage = `Värdet på ${this.label} är inte giltigt.`;
          break;
      }
    } else {
      this.validationErrorMessage = undefined;
    }
  };
}
