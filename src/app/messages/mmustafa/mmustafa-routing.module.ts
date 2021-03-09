import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmustafaPage } from './mmustafa.page';

const routes: Routes = [
  {
    path: '',
    component: MmustafaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmustafaPageRoutingModule {}
