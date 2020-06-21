import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HandleClientComponent} from "@Smarts/handle-client/handle-client.component";


const routes: Routes = [
  {
    path: '',
    component: HandleClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
