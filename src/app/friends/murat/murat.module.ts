import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuratPageRoutingModule } from './murat-routing.module';

import { MuratPage } from './murat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuratPageRoutingModule
  ],
  declarations: [MuratPage]
})
export class MuratPageModule {}
