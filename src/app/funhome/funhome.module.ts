import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunhomePageRoutingModule } from './funhome-routing.module';

import { FunhomePage } from './funhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunhomePageRoutingModule
  ],
  declarations: [FunhomePage]
})
export class FunhomePageModule {}
