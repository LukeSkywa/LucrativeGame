import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { HomeComponent } from './components/home/home.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginRouteGuardService } from './services/route-guard/login-route-guard.service';
import { ModificaRouteGuardService } from './services/route-guard/modifica-route-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'detail/:id', component: DettaglioComponent, canActivate: [LoginRouteGuardService]},
    { path: 'home', component: HomeComponent},
    { path: 'feedback', component: FeedbackComponent, canActivate: [LoginRouteGuardService]}, //Non può accedere al feedback se non è loggato
    { path: 'modifica', component: ModificaComponent, canActivate: [LoginRouteGuardService, ModificaRouteGuardService]},
    { path: 'list', component: ListaComponent, canActivate: [LoginRouteGuardService]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component:PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
