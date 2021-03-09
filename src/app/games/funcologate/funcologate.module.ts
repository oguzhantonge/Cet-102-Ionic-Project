import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncologatePageRoutingModule } from './funcologate-routing.module';

import { FuncologatePage } from './funcologate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncologatePageRoutingModule
  ],
  declarations: [FuncologatePage]
})
export class FuncologatePageModule {}
