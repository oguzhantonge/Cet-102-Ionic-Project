import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelisPageRoutingModule } from './melis-routing.module';

import { MelisPage } from './melis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelisPageRoutingModule
  ],
  declarations: [MelisPage]
})
export class MelisPageModule {}
