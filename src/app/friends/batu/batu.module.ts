import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatuPageRoutingModule } from './batu-routing.module';

import { BatuPage } from './batu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatuPageRoutingModule
  ],
  declarations: [BatuPage]
})
export class BatuPageModule {}
