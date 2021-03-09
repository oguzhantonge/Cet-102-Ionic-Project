import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmustafaPageRoutingModule } from './mmustafa-routing.module';

import { MmustafaPage } from './mmustafa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmustafaPageRoutingModule
  ],
  declarations: [MmustafaPage]
})
export class MmustafaPageModule {}
