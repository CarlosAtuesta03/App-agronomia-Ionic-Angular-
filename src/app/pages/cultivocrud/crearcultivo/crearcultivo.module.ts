import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcultivoPageRoutingModule } from './crearcultivo-routing.module';

import { CrearcultivoPage } from './crearcultivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcultivoPageRoutingModule
  ],
  declarations: [CrearcultivoPage]
})
export class CrearcultivoPageModule {}
