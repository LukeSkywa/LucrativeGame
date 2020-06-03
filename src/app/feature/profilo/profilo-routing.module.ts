import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloComponent } from './profilo.component';

const routes: Routes = [{ path: '', component: ProfiloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfiloRoutingModule { }
