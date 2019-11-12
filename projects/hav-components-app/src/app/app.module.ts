import { GettingStartedModule } from './getting-started/getting-started.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SharedModule,
    AppRoutingModule,
    GettingStartedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
