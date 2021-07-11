import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcultivoPage } from './crearcultivo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcultivoPageRoutingModule {}
