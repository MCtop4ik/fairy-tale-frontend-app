import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalePage } from './tale.page';

const routes: Routes = [
  {
    path: '',
    component: TalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalePageRoutingModule {}
