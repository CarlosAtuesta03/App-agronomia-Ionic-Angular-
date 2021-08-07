import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarlotePage } from './buscarlote.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarlotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarlotePageRoutingModule {}
