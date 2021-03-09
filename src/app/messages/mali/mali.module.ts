import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaliPageRoutingModule } from './mali-routing.module';

import { MaliPage } from './mali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaliPageRoutingModule
  ],
  declarations: [MaliPage]
})
export class MaliPageModule {}
