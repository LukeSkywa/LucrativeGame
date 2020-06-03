import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteGuardService } from './services/route-guard/login-route-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
    { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
    { path: 'signup', loadChildren: () => import('./feature/signup/signup.module').then(m => m.SignupModule) },
    { path: 'list', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule), canActivate: [LoginRouteGuardService] },
    { path: 'list/:filtro', loadChildren: () => import('./feature/lista/lista.module').then(m => m.ListaModule), canActivate: [LoginRouteGuardService] },
    { path: 'cards', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule), canActivate: [LoginRouteGuardService] },
    { path: 'cards/:filtro', loadChildren: () => import('./feature/cards/cards.module').then(m => m.CardsModule), canActivate: [LoginRouteGuardService] },
    { path: 'feedback', loadChildren: () => import('./feature/feedback/feedback.module').then(m => m.FeedbackModule), canActivate: [LoginRouteGuardService] },
    { path: 'detail/:id', loadChildren: () => import('./feature/dettaglio/dettaglio.module').then(m => m.DettaglioModule), canActivate: [LoginRouteGuardService]},
    { path: 'profilo', loadChildren: () => import('./feature/profilo/profilo.module').then(m => m.ProfiloModule), canActivate: [LoginRouteGuardService]},
    { path: 'modifica-profilo', loadChildren: () => import('./feature/modifica-profilo/modifica-profilo.module').then(m => m.ModificaProfiloModule), canActivate: [LoginRouteGuardService] },
    { path: 'modifica-avatar-profilo', loadChildren: () => import('./feature/modifica-avatar-profilo/modifica-avatar-profilo.module').then(m => m.ModificaAvatarProfiloModule), canActivate: [LoginRouteGuardService] },
    { path: '**', loadChildren: () => import('./feature/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
