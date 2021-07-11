import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VertrabajadorPage } from './vertrabajador.page';

const routes: Routes = [
  {
    path: '',
    component: VertrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VertrabajadorPageRoutingModule {}
