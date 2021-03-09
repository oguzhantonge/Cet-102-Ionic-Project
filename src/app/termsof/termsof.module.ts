import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsofPageRoutingModule } from './termsof-routing.module';

import { TermsofPage } from './termsof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsofPageRoutingModule
  ],
  declarations: [TermsofPage]
})
export class TermsofPageModule {}
