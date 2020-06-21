import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BookType} from "@Resources/types/book.type";
import {AuthorService} from "@services/author/author.service";
import {Observable, of, Subscription} from "rxjs";
import {AuthorType} from "@Resources/types/author.type";
import {BookService} from "@services/book/book.service";

@Component({
  selector: 'app-handle-add-author',
  templateUrl: './handle-add-author.component.html',
  styleUrls: ['./handle-add-author.component.scss'],
})
export class HandleAddAuthorComponent implements OnInit, OnDestroy {
  @Input() public book: BookType;
  public authors$: Observable<AuthorType[]>
  private bookSubscription: Subscription;
  public checkAuthor: boolean;
  public authorCheckList: AuthorType[] = [];
  public updateSubscription: Subscription;

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  handleCheck(sel: AuthorType) {
    return !!this.authorCheckList.filter((item: AuthorType) => item.aut_id == sel.aut_id).length;
  }

  updateCheck (sel: AuthorType) {
    let aux: AuthorType[] = this.authorCheckList.filter((item: AuthorType) => item.aut_id == sel.aut_id);
    if (aux.length > 0)
      this.authorCheckList = this.authorCheckList.filter((item: AuthorType) => item.aut_id != sel.aut_id);
    else this.authorCheckList.push(sel);
  }

  ngOnInit() {
    if(this.book) this.bookSubscription = this.bookService.getById(this.book.book_id).subscribe(value => {
      if (value.authors) this.checkAuthor =  value.authors.length > 0;
      if (value.authors && value.authors.length) {
        this.authors$ = of(value.authors);
        this.authorCheckList = value.authors;
      }
      else this.authors$ = this.authors$ = this.authorService.getAll();
    })
  }

  onSetAuthor() {
    if (this.authorCheckList.length) {
      this.book.authors = this.authorCheckList;
      if (this.authorCheckList.length > 0 ) this.updateSubscription = this.bookService.updateBook(this.book).subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.bookSubscription) this.bookSubscription.unsubscribe();
    if (this.updateSubscription) this.updateSubscription.unsubscribe();
    this.authorCheckList = [];
  }


}
