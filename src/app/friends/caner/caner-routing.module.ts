import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanerPage } from './caner.page';

const routes: Routes = [
  {
    path: '',
    component: CanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanerPageRoutingModule {}
