import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MselmanPageRoutingModule } from './mselman-routing.module';

import { MselmanPage } from './mselman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MselmanPageRoutingModule
  ],
  declarations: [MselmanPage]
})
export class MselmanPageModule {}
