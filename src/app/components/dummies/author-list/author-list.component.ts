import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthorType} from "@Resources/types/author.type";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  @Input() public authors$: Observable<AuthorType[]>

  constructor() { }

  ngOnInit() {}

}
