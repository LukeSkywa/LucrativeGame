import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { ModificaAvatarProfiloComponent } from './components/modifica-avatar-profilo/modifica-avatar-profilo.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
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
