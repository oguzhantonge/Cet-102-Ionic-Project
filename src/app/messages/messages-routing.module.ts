import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  },
  {
    path: 'mali',
    loadChildren: () => import('./mali/mali.module').then( m => m.MaliPageModule)
  },
  {
    path: 'mselman',
    loadChildren: () => import('./mselman/mselman.module').then( m => m.MselmanPageModule)
  },
  {
    path: 'mayse',
    loadChildren: () => import('./mayse/mayse.module').then( m => m.MaysePageModule)
  },
  {
    path: 'mbatu',
    loadChildren: () => import('./mbatu/mbatu.module').then( m => m.MbatuPageModule)
  },
  {
    path: 'mmustafa',
    loadChildren: () => import('./mmustafa/mmustafa.module').then( m => m.MmustafaPageModule)
  },
  {
    path: 'myaren',
    loadChildren: () => import('./myaren/myaren.module').then( m => m.MyarenPageModule)
  },
  {
    path: 'mmelis',
    loadChildren: () => import('./mmelis/mmelis.module').then( m => m.MmelisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
