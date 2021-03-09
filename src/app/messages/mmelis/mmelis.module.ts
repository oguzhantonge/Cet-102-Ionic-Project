import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmelisPageRoutingModule } from './mmelis-routing.module';

import { MmelisPage } from './mmelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmelisPageRoutingModule
  ],
  declarations: [MmelisPage]
})
export class MmelisPageModule {}
