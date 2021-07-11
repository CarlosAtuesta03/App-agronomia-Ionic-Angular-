import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreartrabajadorPage } from './creartrabajador.page';

const routes: Routes = [
  {
    path: '',
    component: CreartrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreartrabajadorPageRoutingModule {}
