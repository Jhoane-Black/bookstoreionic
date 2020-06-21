import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookType} from "@Resources/types/book.type";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() public books$: Observable<BookType[]>
  @Input() public eventButton: (event, book: BookType) => void;
  constructor() { }

  ngOnInit() {}

}
