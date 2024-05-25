import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaleListPage } from './tale-list.page';

const routes: Routes = [
  {
    path: '',
    component: TaleListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaleListPageRoutingModule {}
