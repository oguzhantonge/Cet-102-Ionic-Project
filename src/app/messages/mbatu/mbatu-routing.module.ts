import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbatuPage } from './mbatu.page';

const routes: Routes = [
  {
    path: '',
    component: MbatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MbatuPageRoutingModule {}
