import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunhomePage } from './funhome.page';

const routes: Routes = [
  {
    path: '',
    component: FunhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunhomePageRoutingModule {}
