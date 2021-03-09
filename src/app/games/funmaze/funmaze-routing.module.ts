import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunmazePage } from './funmaze.page';

const routes: Routes = [
  {
    path: '',
    component: FunmazePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunmazePageRoutingModule {}
