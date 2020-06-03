import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteGuardService } from './services/route-guard/login-route-guard.service';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { ModificaAvatarProfiloComponent } from './components/modifica-avatar-profilo/modifica-avatar-profilo.component';

const routes: Routes = [
    { path: 'profilo', component: ProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-profilo', component: ModificaProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: 'modifica-avatar-profilo', component: ModificaAvatarProfiloComponent, canActivate: [LoginRouteGuardService]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
    { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
    { path: 'signup', loadChildren: () => import('./feature/signup/signup.module').then(m => m.SignupModule) },
    { path: 'list', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule) },
    { path: 'list/:filtro', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule) },
    { path: 'cards', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule) },
    { path: 'cards/:filtro', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule) },
    { path: 'feedback', loadChildren: () => import('./feature/feedback/feedback.module').then(m => m.FeedbackModule) },
    { path: 'detail/:id', loadChildren: () => import('./feature/dettaglio/dettaglio.module').then(m => m.DettaglioModule) },
    { path: '**', loadChildren: () => import('./feature/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
