import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import {HandleAuthorComponent} from "@Smarts/handle-author/handle-author.component";
import {SharedModule} from "@Modules/shared/shared.module";
import {AuthorFormComponent} from "@Dummies/author-form/author-form.component";


@NgModule({
  declarations: [HandleAuthorComponent, AuthorFormComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
      SharedModule
  ]
})
export class AuthorModule { }
