import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientType} from "@Resources/types/client.type";
import {ClientService} from "@services/client/client.service";
import {Subscription} from "rxjs";
import {StoreAuthenticate} from "@Utils/class/store-auth.class";

@Component({
  selector: 'app-handle-client',
  templateUrl: './handle-client.component.html',
  styleUrls: ['./handle-client.component.scss'],
})
export class HandleClientComponent implements OnInit, OnDestroy {

  private onRegistered: Subscription;

  constructor(private clientService: ClientService, private storeAuthenticate: StoreAuthenticate) { }

  public onFormSubmit(client: ClientType) {
    console.log('form submit', client);
    this.onRegistered= this.clientService.registerClient(client).subscribe(value => {
      if (value.cli_id) {
        this.storeAuthenticate.storeToken(value);
      }
    })
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.onRegistered) this.onRegistered.unsubscribe();
  }

}
