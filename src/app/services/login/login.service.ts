import { Injectable } from '@angular/core';
import {Http} from "@Utils/class/http.class";
import {ClientType} from "@Resources/types/client.type";
import {API_BASE_URL} from "@Resources/constants/url.constant";
import {GenericResponseType} from "@services/login/generic-response.type";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  public login(client: ClientType): Observable<ClientType> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.post<GenericResponseType<ClientType>, ClientType>('client/login', client).pipe(
        map(value => value.body.data),
    );
  }
}
