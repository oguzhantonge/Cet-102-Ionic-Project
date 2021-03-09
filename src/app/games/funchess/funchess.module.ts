import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunchessPageRoutingModule } from './funchess-routing.module';

import { FunchessPage } from './funchess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunchessPageRoutingModule
  ],
  declarations: [FunchessPage]
})
export class FunchessPageModule {}
