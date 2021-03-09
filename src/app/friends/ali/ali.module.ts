import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AliPageRoutingModule } from './ali-routing.module';

import { AliPage } from './ali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AliPageRoutingModule
  ],
  declarations: [AliPage]
})
export class AliPageModule {}
