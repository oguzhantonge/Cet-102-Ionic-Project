import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YarenPageRoutingModule } from './yaren-routing.module';

import { YarenPage } from './yaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YarenPageRoutingModule
  ],
  declarations: [YarenPage]
})
export class YarenPageModule {}
