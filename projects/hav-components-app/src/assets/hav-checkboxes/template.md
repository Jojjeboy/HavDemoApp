```html
<div class="hav-checkboxes">
  <hav-checkbox
    #small
    label="Small"
    checkboxSize="small"
    (check)="onCheck($event, small.value)"
    [value]="smallValue"
  ></hav-checkbox>
  <hav-checkbox
    #medium
    label="Medium (defult)"
    (check)="onCheck($event, medium.value)"
    [value]="mediumValue"
    [checked]="true"
  ></hav-checkbox>
  <hav-checkbox
    #large
    label="Large"
    checkboxSize="large"
    (check)="onCheck($event, large.value)"
    [value]="largeValue"
  ></hav-checkbox>
  <hav-checkbox
    label="Disabled"
    [disabled]="true"
    [checked]="true"
  ></hav-checkbox>
</div>
<div class="check-test-values">
  <p [style.height.rem]="2">
    {{ smallText }}
  </p>
  <p [style.height.rem]="3">
    {{ mediumText }}
  </p>
  <p [style.height.rem]="4">
    {{ largeText }}
  </p>
</div>
```
