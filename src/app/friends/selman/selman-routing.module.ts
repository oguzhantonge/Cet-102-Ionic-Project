import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelmanPage } from './selman.page';

const routes: Routes = [
  {
    path: '',
    component: SelmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelmanPageRoutingModule {}
