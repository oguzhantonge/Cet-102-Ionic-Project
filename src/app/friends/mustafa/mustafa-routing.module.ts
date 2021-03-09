import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MustafaPage } from './mustafa.page';

const routes: Routes = [
  {
    path: '',
    component: MustafaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MustafaPageRoutingModule {}
