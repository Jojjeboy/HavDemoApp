<h3 id="disable-ivy">Slå av Ivy</h3>

_Har du hunnit byta renderer till preview-versionen av Ivy?_ _**Byt tillbaka till View Engine såhär:**_

```typescript
/* tsconfig.app.json */
"angularCompilerOptions": {
    "enableIvy": false
  }
```

Ivy (fortfarande i Preview-läge) har ännu kompatibilitetsproblem som inte är lösta, och det påverkar vissa av komponenterna i hav-components. Ivy ska vara bakåtkompatibel när den är färdigbyggd, så prognosen är god för att allt ska fungera som det ska med Ivy på i framtida Angular-versioner.
