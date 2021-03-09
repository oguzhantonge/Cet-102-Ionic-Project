import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmelisPage } from './mmelis.page';

const routes: Routes = [
  {
    path: '',
    component: MmelisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmelisPageRoutingModule {}
