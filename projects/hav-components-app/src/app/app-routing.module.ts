import { GettingStartedComponent } from './getting-started/getting-started.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then(mod => mod.DirectivesModule)
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components.module').then(mod => mod.ComponentsModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/getting-started' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [288, 80],
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
