import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaAvatarProfiloComponent } from './modifica-avatar-profilo.component';

const routes: Routes = [{ path: '', component: ModificaAvatarProfiloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaAvatarProfiloRoutingModule { }
