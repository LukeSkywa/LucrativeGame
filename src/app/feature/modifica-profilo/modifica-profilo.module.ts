import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaProfiloRoutingModule } from './modifica-profilo-routing.module';
import { ModificaProfiloComponent } from './modifica-profilo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ModificaProfiloComponent],
  imports: [
    CommonModule,
    ModificaProfiloRoutingModule,
    SharedModule
  ]
})
export class ModificaProfiloModule { }
