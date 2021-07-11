import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({

    declarations:[HeaderComponent],
    exports:[
        HeaderComponent,
        AppRoutingModule
            ],
    imports:[
        CommonModule,
        IonicModule,
        AppRoutingModule
            ]
})

export class ComponentsModule{}