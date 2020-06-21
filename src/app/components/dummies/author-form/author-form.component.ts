import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthorType} from "@Resources/types/author.type";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
})
export class AuthorFormComponent implements OnInit {

  @Output() private onSubmitForm = new EventEmitter<AuthorType>();
  public name: string = '';

  constructor() { }

  public onSubmit() {
    console.log(this.name);
    if (this.name) {
      this.onSubmitForm.emit({aut_name: this.name});
      this.name = '';
    }
  }

  ngOnInit() {}

}
