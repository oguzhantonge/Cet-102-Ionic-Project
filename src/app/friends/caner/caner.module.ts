import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanerPageRoutingModule } from './caner-routing.module';

import { CanerPage } from './caner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanerPageRoutingModule
  ],
  declarations: [CanerPage]
})
export class CanerPageModule {}
