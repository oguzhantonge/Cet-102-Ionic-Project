import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsofPage } from './termsof.page';

const routes: Routes = [
  {
    path: '',
    component: TermsofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsofPageRoutingModule {}
