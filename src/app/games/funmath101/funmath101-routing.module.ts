import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funmath101Page } from './funmath101.page';

const routes: Routes = [
  {
    path: '',
    component: Funmath101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funmath101PageRoutingModule {}
