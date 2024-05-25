import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeLogPageRoutingModule } from './change-log-routing.module';

import { ChangeLogPage } from './change-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeLogPageRoutingModule
  ],
  declarations: [ChangeLogPage]
})
export class ChangeLogPageModule {}
