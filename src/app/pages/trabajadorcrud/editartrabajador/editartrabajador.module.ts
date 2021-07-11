import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditartrabajadorPageRoutingModule } from './editartrabajador-routing.module';

import { EditartrabajadorPage } from './editartrabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditartrabajadorPageRoutingModule
  ],
  declarations: [EditartrabajadorPage]
})
export class EditartrabajadorPageModule {}
