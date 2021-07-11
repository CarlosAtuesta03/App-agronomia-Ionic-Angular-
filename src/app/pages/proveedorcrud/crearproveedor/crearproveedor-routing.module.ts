import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearproveedorPage } from './crearproveedor.page';

const routes: Routes = [
  {
    path: '',
    component: CrearproveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearproveedorPageRoutingModule {}
