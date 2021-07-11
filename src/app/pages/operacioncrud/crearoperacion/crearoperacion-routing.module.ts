import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearoperacionPage } from './crearoperacion.page';

const routes: Routes = [
  {
    path: '',
    component: CrearoperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearoperacionPageRoutingModule {}
