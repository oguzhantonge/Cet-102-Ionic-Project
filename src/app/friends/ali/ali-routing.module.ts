import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AliPage } from './ali.page';

const routes: Routes = [
  {
    path: '',
    component: AliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AliPageRoutingModule {}
