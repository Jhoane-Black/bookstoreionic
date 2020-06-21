import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HandleBookFormClass} from "@Utils/class/handle-book-form.class";
import {BookType} from "@Resources/types/book.type";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Input() onFormSubmit: (book: BookType) => void;
  constructor(public handleBookFormClass: HandleBookFormClass) { }

  public onBookSubmit(event) {
    event.preventDefault();
    this.onFormSubmit(this.handleBookFormClass.getValues());
    this.handleBookFormClass.initForm();
  }

  ngOnInit() {
    this.handleBookFormClass.initForm();
  }

}
