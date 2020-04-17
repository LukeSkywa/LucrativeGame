import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { HomeComponent } from './components/home/home.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'detail/:id', component: DettaglioComponent},
    { path: 'home', component: HomeComponent},
    { path: 'modifica', component: ModificaComponent},
    { path: 'list', component: ListaComponent},
    { path: 'signin', component: SigninComponent},
    { path: '**', component:PageNotFoundComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
