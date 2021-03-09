import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyarenPageRoutingModule } from './myaren-routing.module';

import { MyarenPage } from './myaren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyarenPageRoutingModule
  ],
  declarations: [MyarenPage]
})
export class MyarenPageModule {}
