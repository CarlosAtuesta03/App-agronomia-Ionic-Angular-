import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcultivoPageRoutingModule } from './editarcultivo-routing.module';

import { EditarcultivoPage } from './editarcultivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcultivoPageRoutingModule
  ],
  declarations: [EditarcultivoPage]
})
export class EditarcultivoPageModule {}
