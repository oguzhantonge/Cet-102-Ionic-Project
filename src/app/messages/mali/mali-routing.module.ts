import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaliPage } from './mali.page';

const routes: Routes = [
  {
    path: '',
    component: MaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaliPageRoutingModule {}
