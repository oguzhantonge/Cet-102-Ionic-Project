import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Math101PageRoutingModule } from './math101-routing.module';

import { Math101Page } from './math101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Math101PageRoutingModule
  ],
  declarations: [Math101Page]
})
export class Math101PageModule {}
