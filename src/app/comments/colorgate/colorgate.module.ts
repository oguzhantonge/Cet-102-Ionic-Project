import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorgatePageRoutingModule } from './colorgate-routing.module';

import { ColorgatePage } from './colorgate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorgatePageRoutingModule
  ],
  declarations: [ColorgatePage]
})
export class ColorgatePageModule {}
