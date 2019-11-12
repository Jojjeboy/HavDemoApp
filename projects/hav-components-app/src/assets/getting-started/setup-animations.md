<h3 id="animations">Lägg till animationer</h3>

I vissa komponenter används Angular Animations, och därför behöver **BrowserAnimationsModule** importeras.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Alternativet är att skippa animationerna genom att importera **NoopAnimationsModule**.
