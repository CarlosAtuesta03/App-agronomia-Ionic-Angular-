import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerproveedorPage } from './verproveedor.page';

const routes: Routes = [
  {
    path: '',
    component: VerproveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerproveedorPageRoutingModule {}
