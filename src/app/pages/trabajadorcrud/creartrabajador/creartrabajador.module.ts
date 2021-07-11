import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreartrabajadorPageRoutingModule } from './creartrabajador-routing.module';

import { CreartrabajadorPage } from './creartrabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreartrabajadorPageRoutingModule
  ],
  declarations: [CreartrabajadorPage]
})
export class CreartrabajadorPageModule {}
