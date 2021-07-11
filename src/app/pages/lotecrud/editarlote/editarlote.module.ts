import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarlotePageRoutingModule } from './editarlote-routing.module';

import { EditarlotePage } from './editarlote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarlotePageRoutingModule
  ],
  declarations: [EditarlotePage]
})
export class EditarlotePageModule {}
