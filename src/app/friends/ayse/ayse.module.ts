import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AysePageRoutingModule } from './ayse-routing.module';

import { AysePage } from './ayse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AysePageRoutingModule
  ],
  declarations: [AysePage]
})
export class AysePageModule {}
