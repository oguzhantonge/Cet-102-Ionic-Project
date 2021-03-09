import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChessPage } from './chess.page';

const routes: Routes = [
  {
    path: '',
    component: ChessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChessPageRoutingModule {}
