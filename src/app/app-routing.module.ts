import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginRouteGuardService } from './services/route-guard/login-route-guard.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { ModificaAvatarProfiloComponent } from './components/modifica-avatar-profilo/modifica-avatar-profilo.component';

const routes: Routes = [
    { path: 'detail/:id', component: DettaglioComponent, canActivate: [LoginRouteGuardService]},
    { path: 'profilo', component: ProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-profilo', component: ModificaProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-avatar-profilo', component: ModificaAvatarProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'feedback', component: FeedbackComponent, canActivate: [LoginRouteGuardService]}, //Non può accedere al feedback se non è loggato
    // { path: 'list/:filtro', component: ListaComponent, canActivate: [LoginRouteGuardService]},
    // { path: 'cards/:filtro', component: CardsComponent, canActivate: [LoginRouteGuardService]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
    { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
    { path: 'signup', loadChildren: () => import('./feature/signup/signup.module').then(m => m.SignupModule) },
    { path: 'list', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule) },
    { path: 'list/:filtro', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule) },
    { path: 'cards', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule) },
    { path: 'cards/:filtro', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule) },

    { path: '**', component:PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
