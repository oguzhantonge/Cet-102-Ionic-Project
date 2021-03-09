import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'funmath101',
    loadChildren: () => import('./funmath101/funmath101.module').then( m => m.Funmath101PageModule)
  },
  {
    path: 'funmaze',
    loadChildren: () => import('./funmaze/funmaze.module').then( m => m.FunmazePageModule)
  },
  {
    path: 'funcologate',
    loadChildren: () => import('./funcologate/funcologate.module').then( m => m.FuncologatePageModule)
  },
  {
    path: 'funchess',
    loadChildren: () => import('./funchess/funchess.module').then( m => m.FunchessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
