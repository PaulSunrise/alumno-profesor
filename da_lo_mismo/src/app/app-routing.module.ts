import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'nuevouser',
    loadChildren: () => import('./pages/nuevouser/nuevouser.module').then( m => m.NuevouserPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./pages/olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },

  {
    path: 'vivoduoc',
    loadChildren: () => import('./pages/vivoduoc/vivoduoc.module').then( m => m.VivoduocPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'apiferiado',
    loadChildren: () => import('./pages/apiferiado/apiferiado.module').then( m => m.ApiferiadoPageModule),
    canActivate: [AutorizadoGuard] },
  
  
    {
      path: 'qr',
      loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
      canActivate: [AutorizadoGuard]
    },

    {
      path: 'perfil/:usuario.id',
      loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path: 'perfilactualizar/:id',
      loadChildren: () => import('./pages/perfilactualizar/perfilactualizar.module').then( m => m.PerfilactualizarPageModule)
    },
    

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
