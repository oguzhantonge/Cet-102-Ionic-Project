import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunchessPage } from './funchess.page';

const routes: Routes = [
  {
    path: '',
    component: FunchessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunchessPageRoutingModule {}
