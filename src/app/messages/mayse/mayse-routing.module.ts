import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaysePage } from './mayse.page';

const routes: Routes = [
  {
    path: '',
    component: MaysePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaysePageRoutingModule {}
