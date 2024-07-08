import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { KorolevSchoolComponent } from '../korolev-school/korolev-school.component';
import { LevchenkoPoemComponent } from '../levchenko-poem/levchenko-poem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage, KorolevSchoolComponent, LevchenkoPoemComponent]
})
export class AdminPageModule {}
