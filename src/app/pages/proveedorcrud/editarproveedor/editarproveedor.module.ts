import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarproveedorPageRoutingModule } from './editarproveedor-routing.module';

import { EditarproveedorPage } from './editarproveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarproveedorPageRoutingModule
  ],
  declarations: [EditarproveedorPage]
})
export class EditarproveedorPageModule {}
