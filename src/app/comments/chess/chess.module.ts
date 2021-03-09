import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChessPageRoutingModule } from './chess-routing.module';

import { ChessPage } from './chess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChessPageRoutingModule
  ],
  declarations: [ChessPage]
})
export class ChessPageModule {}
