import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarfincaPage } from './editarfinca.page';

const routes: Routes = [
  {
    path: '',
    component: EditarfincaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarfincaPageRoutingModule {}
