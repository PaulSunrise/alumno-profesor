import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VivoduocPage } from './vivoduoc.page';

const routes: Routes = [
  {
    path: '',
    component: VivoduocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VivoduocPageRoutingModule {}
