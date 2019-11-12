```html
<span class="button-clicked-text" *ngIf="buttonClickedText"
  >{{ buttonClickedText }}</span
>
<!-- Primary buttons -->
<hav-button (click)="onClick('Primary button was clicked')">
  Enabled
</hav-button>
<hav-button [disabled]="true">Disabled</hav-button>

<!-- Secondary buttons -->
<hav-button
  buttonType="secondary"
  (click)="onClick('Secondary button was clicked')"
  >Enabled</hav-button
>
<hav-button buttonType="secondary" [disabled]="true">
  Disabled
</hav-button>

<!-- Button sizes -->
<hav-button buttonSize="small">Small</hav-button>
<hav-button>Medium</hav-button>
<hav-button buttonSize="large">Large</hav-button>
```
