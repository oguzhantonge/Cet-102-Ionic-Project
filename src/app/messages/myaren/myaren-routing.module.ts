import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyarenPage } from './myaren.page';

const routes: Routes = [
  {
    path: '',
    component: MyarenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyarenPageRoutingModule {}
