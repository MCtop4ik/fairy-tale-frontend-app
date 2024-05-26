import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlossaryPageRoutingModule } from './glossary-routing.module';

import { GlossaryPage } from './glossary.page';
import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossaryPageRoutingModule
  ],
  declarations: [GlossaryPage, PaginationComponent]
})
export class GlossaryPageModule {}
