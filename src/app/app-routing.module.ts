import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { ListaComponent } from './components/lista/lista.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginRouteGuardService } from './services/route-guard/login-route-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModificaAvatarProfiloComponent } from './components/modifica-avatar-profilo/modifica-avatar-profilo.component';

const routes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'detail/:id', component: DettaglioComponent, canActivate: [LoginRouteGuardService]},
    { path: 'profilo', component: ProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-profilo', component: ModificaProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-avatar-profilo', component: ModificaAvatarProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'feedback', component: FeedbackComponent, canActivate: [LoginRouteGuardService]}, //Non può accedere al feedback se non è loggato
    { path: 'list', component: ListaComponent, canActivate: [LoginRouteGuardService]},
    { path: 'list/:filtro', component: ListaComponent, canActivate: [LoginRouteGuardService]},
    { path: 'cards', component: CardsComponent, canActivate: [LoginRouteGuardService]},
    { path: 'cards/:filtro', component: CardsComponent, canActivate: [LoginRouteGuardService]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
    { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
    { path: '**', component:PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
