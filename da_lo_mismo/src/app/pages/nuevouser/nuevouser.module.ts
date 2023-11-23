import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevouserPageRoutingModule } from './nuevouser-routing.module';

import { NuevouserPage } from './nuevouser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevouserPageRoutingModule
  ],
  declarations: [NuevouserPage]
})
export class NuevouserPageModule {}
