import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarlotePageRoutingModule } from './buscarlote-routing.module';

import { BuscarlotePage } from './buscarlote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarlotePageRoutingModule
  ],
  declarations: [BuscarlotePage]
})
export class BuscarlotePageModule {}
