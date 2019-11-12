```html
<hav-button (click)="toggleAnimationPause()" [style]="{ width: '12rem' }">
  {{ animationIsPaused ? 'Start spinning' : 'Stop spinning' }}
</hav-button>

<!-- Small spinner -->
<hav-spinner spinnerSize="small"></hav-spinner>

<!-- Medium (default) spinner -->
<hav-spinner></hav-spinner>

<!-- Large spinner -->
<hav-spinner spinnerSize="large"></hav-spinner>
```
