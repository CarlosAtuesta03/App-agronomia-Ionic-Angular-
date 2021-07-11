import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaroperacionPageRoutingModule } from './editaroperacion-routing.module';

import { EditaroperacionPage } from './editaroperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaroperacionPageRoutingModule
  ],
  declarations: [EditaroperacionPage]
})
export class EditaroperacionPageModule {}
