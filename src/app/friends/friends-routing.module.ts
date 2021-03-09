import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsPage } from './friends.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsPage
  },
  {
    path: 'ayse',
    loadChildren: () => import('./ayse/ayse.module').then( m => m.AysePageModule)
  },
  {
    path: 'ali',
    loadChildren: () => import('./ali/ali.module').then( m => m.AliPageModule)
  },
  {
    path: 'batu',
    loadChildren: () => import('./batu/batu.module').then( m => m.BatuPageModule)
  },
  {
    path: 'caner',
    loadChildren: () => import('./caner/caner.module').then( m => m.CanerPageModule)
  },
  {
    path: 'yaren',
    loadChildren: () => import('./yaren/yaren.module').then( m => m.YarenPageModule)
  },
  {
    path: 'murat',
    loadChildren: () => import('./murat/murat.module').then( m => m.MuratPageModule)
  },
  {
    path: 'mustafa',
    loadChildren: () => import('./mustafa/mustafa.module').then( m => m.MustafaPageModule)
  },
  {
    path: 'selman',
    loadChildren: () => import('./selman/selman.module').then( m => m.SelmanPageModule)
  },
  {
    path: 'melis',
    loadChildren: () => import('./melis/melis.module').then( m => m.MelisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsPageRoutingModule {}
