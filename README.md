# hav-components

- Repositoryt hav-components består av ett workspace med två projekt: hav-components och hav-components-app
- `hav-components` är det faktiska komponentbiblioteket
- `hav-components-app` är appen som används som dokumentation för konsumenter av biblioteket och publiceras på http://livm59t:81/hav-components/ <br>
  `hav-components-app` används samtidigt som utvecklingsplats för nya komponenter.

När man utvecklar en ny komponent börjar man med att lägga till den i lib-projektet, för att sedan direkt skapa en exempel-komponent i components-modulen i hav-components-app som visar upp den nya komponenten.

## Utveckling

### Starta den lokala utvecklingsservern

```bash
ng serve
```

### Skapa nya komponenter

- Gå toppen av Angular-workspace-foldern och generera en ny NgModule i lib-projektet:

```bash
ng g module RadioButton --project hav-components
```

- Generera en ny component i den nyskapade modulen:

```bash
ng g c RadioButton --module radio-button --project hav-components
```

- Generera en ny component i dokumentations- och test-projektet

```bash
ng g c components/HavRadioButtons --module components
```

- Lägg till en ny route i components-routing.module.ts:

```typescript
const routes: Routes = [
  {
    path: '',
    children: [
      ...,
      {
        path: 'radio-buttons',
        component: HavRadioButtonComponent
      }
    ]
  }
];
```

- Lägg till en rubrik och en url i core/side-menu.component.ts

### Dokumentera komponenter

Alla Input- och Output-propertys, samt methods som är tänkta att användas av konsumenten ska dokumenteras på varje komponents API-sida. Det ska finnas exempel och exempelkod. Exempel-koden ligger i markdown-filer i `assets-mappen`, som visas upp med en hemmabyggd enkel tab-komponent. Exempel, exempelkod och API visas upp mha `documentation`-komponenten. Dokumentation kräver i nuläget en del manuellt arbete, och det finns nog smidigare sätt att lösa ex API-docs (nu får man ju komma ihåg att uppdatera varje gång något ändras).

### Web Content Accessability Guidelines (WCAG)

Som myndighet har HaV lagkrav på sig gällande digital tillgänglighet för alla användare. Det betyder att wepplatser, appar och annat digitalt som myndigheten sprider ska uppnå minst nivå AA i version 2.1 av WCAG (Se https://www.w3.org/TR/WCAG21/).

Utdrag från [webbriktlinjer.se](https://webbriktlinjer.se/lagkrav/webbdirektivet/):

<blockquote>
<h4>När börjar kraven gälla?</h4>

Följande datum finns angivna i webbdirektivet:

- Nya webbplatser berörs från och med den 23 september 2019.
- Befintliga webbplatser (som offentliggjorts innan 23 september 2018), samt tidsberoende media (video m.m) berörs från och med den 23 september 2020.
- Publika appar berörs från och med 23 juni 2021.
- Intranät och extranät som publicerats före 23 september 2019 omfattas inte av någon bortre tidsgräns då de måste vara tillgängliga. Däremot ska de göras tillgängliga när de genomgår en omfattande översyn.</blockquote>

<br>

**_Ovanstående får konsekvensen att ett komponent-bibliotek med syfte att användas av flera olika system måste nå upp till nivå AA i WCAG 2.1._**

När komponenter utvecklas bör man utgå från DIGG och Post- och telestyrelsens [checklista](https://webbriktlinjer.se/wcag/?checklista) för att säkerställa att riktlinjerna efterlevs.

### Angular Forms och hav-components

Samtliga formulärkomponenter i hav-components ska kunna gå att använda i Reactive Forms, alltså vara Custom Form Controls. Det innebär bland annat att de måste implementera interfacet ControlValueAccessor.

- Angular Reactive forms: https://angular.io/guide/reactive-forms
- Bra youtube-klipp om Custom Form Control: https://www.youtube.com/watch?v=CD_t3m2WMM8

### Kodstandard

Angular har en [stilguide](https://angular.io/guide/styleguide), och HaV har också en några [frontend-riktlinjer](https://confluence.havochvatten.se/display/dev/Frontend+riktlinjer#Frontendriktlinjer-JavascriptStyleguide).

Utöver det:

- inga any-typer utan anledning
- inga IDE-filer i bitbucket-repot
- ingen margin/padding runt det yttre html-elementet i en komponent
- importer av tredjeparts-css i angular.json
- försök att implementera saker på ett enhetligt vis
- ta seden dit du kommer

_"What would Angular Material do?"_ Kan vara bra att tänka om man kör fast på något, eller funderar på hur man kan implementera saker. Finns en del spännande lösningar att inspireras av i deras github-repo.

Om saker börjar bli lite krångliga att utveckla helt från scratch kan man också ta hjälp av [Angular CDK (Angular Component DevKit)](https://material.angular.io/cdk).

### Kodformatering med Prettier

[Prettier](https://prettier.io/) är en kodformaterare som kan formatera många olika språk. Det går även att \
konfigurera så att editorn formaterar kod enligt prettier-regler när man sparar filer. \
För att formatera samtliga filer i `src` och `e2e` kör:

```
npm run format
```

Det finns en pre-commit git [hook](https://githooks.com/) som är uppsatt med [husky](https://github.com/typicode/husky)
och [lint-staged](https://github.com/okonet/lint-staged). Den \
använder prettier för att formatera stage:ade filer vid varje commit. lint-staged har \
dessutom stöd för att enbart formatera enbart de hunks som ska comittas, om det inte är \
tänkt att hela filen ska committas.

### Git hooks

Förutom pre-commit-hooken finns även en pre-push-hook som kör en tslint-check på hela projektet.

## Publicera hav-components

I nuläget görs hav-components tillängligt som ett npm paket i det publika npm-registret.

Versioneringen av komponentbiblioteket ska följa [SemVer-standard](https://semver.org/).
(Uppdatera alltså inte till version 1.x.x förrän sakernas tillstånd börjar bli mer stabilt... )

1. Uppdatera version enligt ovanstående genom att gå till projects/hav-components och sedan köra:

```bash
npm version patch|minor|major
```

2. Gå till roten av workspacet och paketera libet:

```bash
npm run build:package
```

Det lintar och bygger libet, och flyttar in projects/hav-components/README.md + libet till dist-mappen och packar ihop allt under dist/hav-components till en tarboll (`hav-components-<version>.tgz`).

Om man vill paketera en ny patch-version kan man också köra:

```bash
npm run build:patch
```

Det scriptet kör patch-version kommandot samt paketerar libet.

3. Logga in på npm som användaren `hav-frontend` och publicera paketet:

```bash
npm login
npm publish dist/hav-components/hav-components-<version>.tgz
```

<blockquote>
Det vore bra om en automatisk paketering + publicering gjordes mha Jenkins istället, till exempel om en commit med ett versionnummer mergas till master.
</blockquote>

## Paketera och publicera hav-components-app

1. Kör:

```bash
npm run prod-build
```

2. zip:a dist/hav-components-app
3. Skicka till Johannes Kärnstam- som sedan publicerar sidan på `livm59t:81/hav-components` :)

## Angular CLI-stöd - schematics (ej klart)

Det finns en ng-add-schematic som installerar biblioteket och automatiskt gör de konfigurationssteg som behövs för att använda biblioteket.
Det betyder att det ska gå att köra `ng add hav-components` i ett Angularprojekt med följande resultat:

- hav-components och @angular/cdk installeras
- BrowserAnimationsModule importeras i app.module.ts
- Roboto-fonten läggs till i index.html och sätts till standardfont för applikationen
- Favicon byts ut till HaV:s favicon

Trots att `ng add` fungerar som tänkt, händer något konstigt när man bygger både schematics och biblioteket, som resulterar i ett 'Could not resolve module'-runtime-fel för `hav-components` när man försöker importera därifrån. Så därför packas inte schematics med i npm-paketet i nuläget. Men vill man experimentera mer med detta bygger man och testar schematics såhär:

Lägg till `npm run build:schematics` före `pack:lib`-steget i `build:package` och kör

```bash
npm build:package
```

Testa på ett tomt Angular-projekt genom att först npm-linka i det tomma projektet:

```bash
npm link <path-to/hav-components/dist/hav-components>
```

Och sedan:

```bash
ng add hav-components
```

Om man lyckas få det att fungera som det ska behöver man också lägga till `@angular/cdk` som peerDependency i `hav-components` package.json.

Tips på Schematics-resurser:

- https://brianflove.com/2018/12/15/ng-add-schematic/
- https://www.softwarearchitekt.at/aktuelles/generating-custom-code-with-the-angular-cli-and-schematics/
- https://nitayneeman.com/posts/making-an-addable-angular-package-using-schematics/#creating-the-library
- https://angular.io/guide/schematics

## Ofärdigt och påbörjat

- Komponenterna har gått igneom webbriktlinjers WCAG-checklista, med den reservationen att de inte blivit testade med screen readers.
- Komponenterna är inte testade i andra webbläsare än Chrome
- Komponenterna har inte testats ordentligt på mobil

### Påbörjade komponenter / ofärdig funktionalitet

- radio-button (det ska finnas en branch med påbörjat arbete) - det återstår bland annat att skapa Angular-forms-kompatibel radio-button-group
- tri-state checkbox
