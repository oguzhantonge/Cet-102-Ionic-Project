import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatuPage } from './batu.page';

const routes: Routes = [
  {
    path: '',
    component: BatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatuPageRoutingModule {}
