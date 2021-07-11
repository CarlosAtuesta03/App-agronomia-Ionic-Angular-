import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarproveedorPage } from './editarproveedor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarproveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarproveedorPageRoutingModule {}
