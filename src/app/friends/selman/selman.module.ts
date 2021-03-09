import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelmanPageRoutingModule } from './selman-routing.module';

import { SelmanPage } from './selman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelmanPageRoutingModule
  ],
  declarations: [SelmanPage]
})
export class SelmanPageModule {}
