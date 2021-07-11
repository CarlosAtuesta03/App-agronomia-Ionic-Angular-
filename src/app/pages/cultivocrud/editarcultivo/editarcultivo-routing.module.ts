import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarcultivoPage } from './editarcultivo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarcultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcultivoPageRoutingModule {}
