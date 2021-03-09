import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettinPageRoutingModule } from './settin-routing.module';

import { SettinPage } from './settin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettinPageRoutingModule
  ],
  declarations: [SettinPage]
})
export class SettinPageModule {}
