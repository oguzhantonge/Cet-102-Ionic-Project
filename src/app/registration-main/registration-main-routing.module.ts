import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationMainPage } from './registration-main.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationMainPageRoutingModule {}
