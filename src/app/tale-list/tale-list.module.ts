import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TaleListPage } from './tale-list.page';

import { TaleListPageRoutingModule } from './tale-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaleListPageRoutingModule
  ],
  declarations: [TaleListPage]
})
export class TaleListPageModule {}
