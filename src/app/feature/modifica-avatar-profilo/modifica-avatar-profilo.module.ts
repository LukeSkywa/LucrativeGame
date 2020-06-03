import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaAvatarProfiloRoutingModule } from './modifica-avatar-profilo-routing.module';
import { ModificaAvatarProfiloComponent } from './modifica-avatar-profilo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ModificaAvatarProfiloComponent],
  imports: [
    CommonModule,
    ModificaAvatarProfiloRoutingModule,
    SharedModule
  ]
})
export class ModificaAvatarProfiloModule { }
