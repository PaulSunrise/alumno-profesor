import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VivoduocPageRoutingModule } from './vivoduoc-routing.module';

import { VivoduocPage } from './vivoduoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VivoduocPageRoutingModule
  ],
  declarations: [VivoduocPage]
})
export class VivoduocPageModule {}
