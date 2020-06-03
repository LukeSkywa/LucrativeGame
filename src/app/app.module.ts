import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { ModificaAvatarProfiloComponent } from './components/modifica-avatar-profilo/modifica-avatar-profilo.component';
import { CardsComponent } from './components/cards/cards.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CardsComponent,
    DettaglioComponent,
    PageNotFoundComponent,
    SignupComponent,
    FeedbackComponent,
    ProfiloComponent,
    ModificaProfiloComponent,
    ModificaAvatarProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
