import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiferiadoPageRoutingModule } from './apiferiado-routing.module';

import { ApiferiadoPage } from './apiferiado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiferiadoPageRoutingModule
  ],
  declarations: [ApiferiadoPage]
})
export class ApiferiadoPageModule {}
