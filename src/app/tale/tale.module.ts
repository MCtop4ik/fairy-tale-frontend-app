import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalePageRoutingModule } from './tale-routing.module';

import { TalePage } from './tale.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalePageRoutingModule,
    PipesModule
  ],
  declarations: [TalePage],
})
export class TalePageModule {}
