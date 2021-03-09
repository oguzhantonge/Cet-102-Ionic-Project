import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsPage } from './comments.page';

const routes: Routes = [
  {
    path: '',
    component: CommentsPage
  },
  {
    path: 'math101',
    loadChildren: () => import('./math101/math101.module').then( m => m.Math101PageModule)
  },
  {
    path: 'maze',
    loadChildren: () => import('./maze/maze.module').then( m => m.MazePageModule)
  },
  {
    path: 'colorgate',
    loadChildren: () => import('./colorgate/colorgate.module').then( m => m.ColorgatePageModule)
  },
  {
    path: 'chess',
    loadChildren: () => import('./chess/chess.module').then( m => m.ChessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsPageRoutingModule {}
