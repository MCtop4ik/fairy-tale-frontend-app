import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tales/:timestamp',
    loadChildren: () => import('./tale-list/tale-list.module').then( m => m.TaleListPageModule)
  },
  {
    path: 'tales/:timestamp/tale/:id',
    loadChildren: () => import('./tale/tale.module').then( m => m.TalePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'under-construction',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tale',
    loadChildren: () => import('./tale/tale.module').then( m => m.TalePageModule)
  },
  {
    path: 'glossary',
    loadChildren: () => import('./glossary/glossary.module').then( m => m.GlossaryPageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin-panel/admin-panel.module').then( m => m.AdminPanelPageModule)
  },
  {
    path: 'updates',
    loadChildren: () => import('./change-log/change-log.module').then( m => m.ChangeLogPageModule)
  },
  {
    path: 'under-construction',
    loadChildren: () => import('./under-construction/under-construction.module').then( m => m.UnderConstructionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
