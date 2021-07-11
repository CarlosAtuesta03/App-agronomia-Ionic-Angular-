import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearfincaPage } from './crearfinca.page';

const routes: Routes = [
  {
    path: '',
    component: CrearfincaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearfincaPageRoutingModule {}
