import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationMainPageRoutingModule } from './registration-main-routing.module';

import { RegistrationMainPage } from './registration-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationMainPageRoutingModule
  ],
  declarations: [RegistrationMainPage]
})
export class RegistrationMainPageModule {}
