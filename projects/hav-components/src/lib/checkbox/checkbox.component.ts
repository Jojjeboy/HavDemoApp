import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Self,
  Optional,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  AbstractControl,
  Validators
} from '@angular/forms';
import { checkmarkSVGData, CheckmarkSVGData } from './checkmarkUtil';

@Component({
  selector: 'hav-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent
  implements OnChanges, OnInit, ControlValueAccessor {
  @Input() checkboxSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() hideLabel = false;
  @Input() label: string | undefined;
  @Input() requiredTrue = false;
  @Input() value: any;
  @Output() check = new EventEmitter<boolean>();
  checkmarkSVGData: CheckmarkSVGData | undefined;
  control: AbstractControl | null | undefined;

  constructor(@Optional() @Self() public controlDir: NgControl) {
    if (controlDir) {
      controlDir.valueAccessor = this;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.controlDir && this.controlDir.control) {
      this.control = this.controlDir.control;
      if (this.control.disabled) {
        this.disabled = true;
      }
      this.control.setValidators([
        this.control.validator || Validators.nullValidator,
        this.requiredTrue ? Validators.requiredTrue : Validators.nullValidator
      ]);
    }
  }

  ngOnInit() {
    if (this.label === undefined) {
      throw new Error('Property `label` is missing');
    }
    this.checkmarkSVGData = checkmarkSVGData(this.checkboxSize);
    if (this.control) {
      this.control.updateValueAndValidity();
    }
  }

  onClick = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.check.emit(this.checked);
    }
  };

  registerOnChange = (fn: any): void => {
    this.onChange = fn;
  };

  registerOnTouched = (fn: () => void): void => {
    this.onTouched = fn;
  };

  setDisabledState = (isDisabled: boolean): void => {
    this.disabled = isDisabled;
  };

  writeValue = (checked: boolean): void => {
    this.checked = checked;
  };

  onChange = (input: any) => {};

  onTouched = () => {};
}
