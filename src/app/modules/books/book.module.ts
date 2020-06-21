import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookFormComponent} from "@Dummies/book-form/book-form.component";
import {HandleBookComponent} from "@Smarts/handle-book/handle-book.component";
import {SharedModule} from "@Modules/shared/shared.module";
import {BookListComponent} from "@Dummies/book-list/book-list.component";


@NgModule({
  declarations: [BookFormComponent, HandleBookComponent,  BookListComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
      SharedModule
  ]
})
export class BookModule { }
