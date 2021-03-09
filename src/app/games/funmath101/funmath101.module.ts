import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Funmath101PageRoutingModule } from './funmath101-routing.module';

import { Funmath101Page } from './funmath101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Funmath101PageRoutingModule
  ],
  declarations: [Funmath101Page]
})
export class Funmath101PageModule {}
