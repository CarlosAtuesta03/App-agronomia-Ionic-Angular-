import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaroperacionPage } from './editaroperacion.page';

const routes: Routes = [
  {
    path: '',
    component: EditaroperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaroperacionPageRoutingModule {}
