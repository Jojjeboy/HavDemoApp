import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[havFocusOutline]'
})
export class FocusOutlineDirective {
  @Input() outline = 'solid 2px #eaa00e';
  @Input() addFocusOutlineOnTabKeyboardEvent = false;
  @Input() outlineOffsetInsideElement = false;
  private prevOutlineValue = 'none';
  private prevOutlineOffsetValue = '0';

  constructor(private el: ElementRef) {}

  @HostListener('focusout') onFocusOut() {
    this.removeOutline();
  }

  @HostListener('focusin') onFocusIn() {
    if (!this.addFocusOutlineOnTabKeyboardEvent) {
      this.addOutline();
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Tab' && this.addFocusOutlineOnTabKeyboardEvent) {
      this.addOutline();
    }
  }

  private addOutline = () => {
    this.prevOutlineValue = this.el.nativeElement.style.outline;
    this.el.nativeElement.style.outline = this.outline;
    if (this.outlineOffsetInsideElement) {
      this.prevOutlineOffsetValue = this.el.nativeElement.style.outlineOffset;
      this.el.nativeElement.style.outlineOffset = '-2px';
    }
  };

  private removeOutline = () => {
    this.el.nativeElement.style.outline = this.prevOutlineValue;
    if (this.outlineOffsetInsideElement) {
      this.el.nativeElement.style.outlineOffset = this.prevOutlineOffsetValue;
    }
  };
}
