import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MazePageRoutingModule } from './maze-routing.module';

import { MazePage } from './maze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MazePageRoutingModule
  ],
  declarations: [MazePage]
})
export class MazePageModule {}
