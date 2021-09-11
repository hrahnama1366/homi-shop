import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ShopComponent, children: [
      { path: 'detail/:id', component: DetailComponent }
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
