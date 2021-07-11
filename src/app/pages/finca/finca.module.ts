import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincaPageRoutingModule } from './finca-routing.module';

import { FincaPage } from './finca.page';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FincaPageRoutingModule
    
  ],
  declarations: [FincaPage]
})
export class FincaPageModule {}
