import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearfincaPageRoutingModule } from './crearfinca-routing.module';

import { CrearfincaPage } from './crearfinca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearfincaPageRoutingModule
  ],
  declarations: [CrearfincaPage]
})
export class CrearfincaPageModule {}
