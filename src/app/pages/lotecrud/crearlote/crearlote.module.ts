import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearlotePageRoutingModule } from './crearlote-routing.module';

import { CrearlotePage } from './crearlote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearlotePageRoutingModule
  ],
  declarations: [CrearlotePage]
})
export class CrearlotePageModule {}
