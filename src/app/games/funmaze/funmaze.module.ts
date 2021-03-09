import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunmazePageRoutingModule } from './funmaze-routing.module';

import { FunmazePage } from './funmaze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunmazePageRoutingModule
  ],
  declarations: [FunmazePage]
})
export class FunmazePageModule {}
