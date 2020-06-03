import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaProfiloComponent } from './modifica-profilo.component';

const routes: Routes = [{ path: '', component: ModificaProfiloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaProfiloRoutingModule { }
