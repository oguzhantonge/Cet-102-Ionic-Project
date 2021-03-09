import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AysePage } from './ayse.page';

const routes: Routes = [
  {
    path: '',
    component: AysePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AysePageRoutingModule {}
