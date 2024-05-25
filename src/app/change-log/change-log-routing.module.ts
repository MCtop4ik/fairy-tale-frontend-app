import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeLogPage } from './change-log.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeLogPageRoutingModule {}
