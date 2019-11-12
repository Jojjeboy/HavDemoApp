```html
<!-- Default orange outline on focus -->
<div havFocusOutline tabindex="0">Default</div>
<!-- Custom outline on focus -->
<div havFocusOutline outline="dashed 4px purple" tabindex="0">
  Custom focus outline
</div>
<!-- Default outline, but with offset set 
     to be -2px from the host element bounds -->
<div tabindex="0" havFocusOutline [outlineOffsetInsideElement]="true">
  Outline offset inside host element.
</div>
```
