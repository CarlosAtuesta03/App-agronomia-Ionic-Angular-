import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarlotePage } from './editarlote.page';

const routes: Routes = [
  {
    path: '',
    component: EditarlotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarlotePageRoutingModule {}
