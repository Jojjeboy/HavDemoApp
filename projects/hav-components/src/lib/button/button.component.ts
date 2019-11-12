import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'hav-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Output() click = new EventEmitter<MouseEvent | KeyboardEvent>();
  @Input() disabled = false;
  @Input() style: object | undefined;
  @Input() buttonType: 'primary' | 'secondary' = 'primary';
  @Input() buttonSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() isSubmitButton = false;

  onClick = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(event);
  };

  onEnterKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  onEnterKeyUp = (event: KeyboardEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(event);
  };
}
