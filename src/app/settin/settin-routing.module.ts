import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettinPage } from './settin.page';

const routes: Routes = [
  {
    path: '',
    component: SettinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettinPageRoutingModule {}
