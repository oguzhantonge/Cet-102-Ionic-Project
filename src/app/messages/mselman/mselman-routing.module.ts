import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MselmanPage } from './mselman.page';

const routes: Routes = [
  {
    path: '',
    component: MselmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MselmanPageRoutingModule {}
