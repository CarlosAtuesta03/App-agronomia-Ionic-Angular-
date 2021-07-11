import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerproveedorPageRoutingModule } from './verproveedor-routing.module';

import { VerproveedorPage } from './verproveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerproveedorPageRoutingModule
  ],
  declarations: [VerproveedorPage]
})
export class VerproveedorPageModule {}
