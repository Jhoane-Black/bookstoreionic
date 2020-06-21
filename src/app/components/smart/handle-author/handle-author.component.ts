import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorType} from "@Resources/types/author.type";
import {AuthorService} from "@services/author/author.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-handle-author',
  templateUrl: './handle-author.component.html',
  styleUrls: ['./handle-author.component.scss'],
})
export class HandleAuthorComponent implements OnInit {
  public authors$: Observable<AuthorType[]>;

  constructor(private authorService: AuthorService) { }

  public onAuthorForm(event: AuthorType) {
    console.log(event);
    if (event) this.authors$ = this.authorService.handleSaveLoadList(event);
  }

  ngOnInit() {
    this.authors$ = this.authorService.getAll();
  }

}
