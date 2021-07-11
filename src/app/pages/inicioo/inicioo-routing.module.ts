import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciooPage } from './inicioo.page';

const routes: Routes = [
  {
    path: '',
    component: IniciooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciooPageRoutingModule {}
