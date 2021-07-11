import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditartrabajadorPage } from './editartrabajador.page';

const routes: Routes = [
  {
    path: '',
    component: EditartrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditartrabajadorPageRoutingModule {}
