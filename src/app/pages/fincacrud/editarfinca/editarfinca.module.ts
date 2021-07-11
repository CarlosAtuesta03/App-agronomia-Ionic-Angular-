import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarfincaPageRoutingModule } from './editarfinca-routing.module';

import { EditarfincaPage } from './editarfinca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarfincaPageRoutingModule
  ],
  declarations: [EditarfincaPage]
})
export class EditarfincaPageModule {}
