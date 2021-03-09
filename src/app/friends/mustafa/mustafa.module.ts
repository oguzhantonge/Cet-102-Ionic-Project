import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MustafaPageRoutingModule } from './mustafa-routing.module';

import { MustafaPage } from './mustafa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MustafaPageRoutingModule
  ],
  declarations: [MustafaPage]
})
export class MustafaPageModule {}
