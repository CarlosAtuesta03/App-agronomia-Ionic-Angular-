import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearoperacionPageRoutingModule } from './crearoperacion-routing.module';

import { CrearoperacionPage } from './crearoperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearoperacionPageRoutingModule
  ],
  declarations: [CrearoperacionPage]
})
export class CrearoperacionPageModule {}
