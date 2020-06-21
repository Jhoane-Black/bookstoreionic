import { Component, OnInit } from '@angular/core';
import {BookType} from "@Resources/types/book.type";
import {BookService} from "@services/book/book.service";
import {Observable} from "rxjs";
import {ModalController, PopoverController} from "@ionic/angular";
import {BookFormComponent} from "@Dummies/book-form/book-form.component";
import {HandleBookFormClass} from "@Utils/class/handle-book-form.class";
import {HandleAddAuthorComponent} from "@Smarts/handle-add-author/handle-add-author.component";

@Component({
  selector: 'app-handle-book',
  templateUrl: './handle-book.component.html',
  styleUrls: ['./handle-book.component.scss'],
})
export class HandleBookComponent implements OnInit {

  public books$: Observable<BookType[]>;
  constructor(private bookService: BookService, public modalController: ModalController, private pop: PopoverController) { }

  onSubmit = (event: BookType): void => {
    this.books$ = this.bookService.handleSaveList(event);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }



  async openModal() {
    const modal = await this.modalController.create({
      component: BookFormComponent,
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        onFormSubmit: this.onSubmit
      }
    });
    return await modal.present();
  }

  public executePop = (event, book: BookType) => {
    console.log('event book: ', book);
    this.onPopOver(event, book);
  }

  async onPopOver(event: any, book: BookType) {
    const popover = await this.pop.create({
      component: HandleAddAuthorComponent,
      event: event,
      componentProps: {
        book: book
      }
    });
    popover.present();
  }

  ngOnInit() {
    this.books$ = this.bookService.getAll();
  }

}
