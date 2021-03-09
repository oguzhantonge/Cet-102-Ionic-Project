import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorgatePage } from './colorgate.page';

const routes: Routes = [
  {
    path: '',
    component: ColorgatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorgatePageRoutingModule {}
