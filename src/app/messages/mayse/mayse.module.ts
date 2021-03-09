import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaysePageRoutingModule } from './mayse-routing.module';

import { MaysePage } from './mayse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaysePageRoutingModule
  ],
  declarations: [MaysePage]
})
export class MaysePageModule {}
