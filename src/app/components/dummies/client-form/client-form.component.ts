import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientType} from "@Resources/types/client.type";
import {HandleClientFormClass} from "@Utils/class/handle-client-form.class";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  @Output() public onSubmitForm = new EventEmitter<ClientType>();

  constructor(public handleClientFormClass: HandleClientFormClass) { }

  public onLocalSubmitForm(event) {
    event.preventDefault();
    this.onSubmitForm.emit(this.handleClientFormClass.getFormValues());
  }

  ngOnInit() {
    this.handleClientFormClass.initForm();
  }

}
