import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HandleAuthorComponent} from "@Smarts/handle-author/handle-author.component";


const routes: Routes = [
  {
    path: '',
    component: HandleAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
