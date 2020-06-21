import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HandleBookComponent} from "@Smarts/handle-book/handle-book.component";


const routes: Routes = [
  {
    path: '',
    component: HandleBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
