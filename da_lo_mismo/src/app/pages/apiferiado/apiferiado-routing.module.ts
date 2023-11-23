import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiferiadoPage } from './apiferiado.page';

const routes: Routes = [
  {
    path: '',
    component: ApiferiadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiferiadoPageRoutingModule {}
