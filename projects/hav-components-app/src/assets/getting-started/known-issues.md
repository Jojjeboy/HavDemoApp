<h3 id="known-issues">Kända problem</h3>

Vissa saker fungerar inte i nuläget (Angular v 8.2.x) som de ska om Ivy är enabled i applikationen som använder hav-components.
Eftersom att Ivy fortfarande är i preview-läge, förmodligen fram till Angular 9, går inte alltid de problemen att lösa (eftersom att de ska fixas i senare versioner av Ivy).

_Alternativen är:_

- Avvakta till senare versioner av Angular, och se till att både hav-components och projekten som beror av hav-components uppgraderas när det är dags.
- Slå av Ivy.

_Problem som är relaterade till Ivy:_

- Felmeddelanden renderas inte när valideringen på reactive forms-komponenter inte går igenom. Det beror på att NgControl-direktivets control-property inte är definierad när Ivy används, vilket också säkert kan orsaka fler oupptäckta följdfel.
