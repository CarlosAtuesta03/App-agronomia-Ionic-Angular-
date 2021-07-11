import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearproveedorPageRoutingModule } from './crearproveedor-routing.module';

import { CrearproveedorPage } from './crearproveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearproveedorPageRoutingModule
  ],
  declarations: [CrearproveedorPage]
})
export class CrearproveedorPageModule {}
