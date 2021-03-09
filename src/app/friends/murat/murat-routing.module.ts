import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuratPage } from './murat.page';

const routes: Routes = [
  {
    path: '',
    component: MuratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuratPageRoutingModule {}
