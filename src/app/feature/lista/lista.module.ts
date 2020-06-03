import { NgModule } from '@angular/core';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    SharedModule
  ]
})
export class ListaModule { }
