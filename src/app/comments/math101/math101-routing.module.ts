import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Math101Page } from './math101.page';

const routes: Routes = [
  {
    path: '',
    component: Math101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Math101PageRoutingModule {}
