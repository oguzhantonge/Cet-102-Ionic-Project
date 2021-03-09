import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MazePage } from './maze.page';

const routes: Routes = [
  {
    path: '',
    component: MazePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MazePageRoutingModule {}
