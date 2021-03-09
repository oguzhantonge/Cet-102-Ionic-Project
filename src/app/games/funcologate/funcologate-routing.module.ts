import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncologatePage } from './funcologate.page';

const routes: Routes = [
  {
    path: '',
    component: FuncologatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncologatePageRoutingModule {}
