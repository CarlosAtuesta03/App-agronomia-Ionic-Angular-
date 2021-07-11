import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VertrabajadorPageRoutingModule } from './vertrabajador-routing.module';

import { VertrabajadorPage } from './vertrabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VertrabajadorPageRoutingModule
  ],
  declarations: [VertrabajadorPage]
})
export class VertrabajadorPageModule {}
