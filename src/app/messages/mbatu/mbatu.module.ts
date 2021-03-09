import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MbatuPageRoutingModule } from './mbatu-routing.module';

import { MbatuPage } from './mbatu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbatuPageRoutingModule
  ],
  declarations: [MbatuPage]
})
export class MbatuPageModule {}
