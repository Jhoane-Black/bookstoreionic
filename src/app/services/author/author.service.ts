import { Injectable } from '@angular/core';
import {Http} from "@Utils/class/http.class";
import {AuthorType} from "@Resources/types/author.type";
import {concat, Observable} from "rxjs";
import {API_BASE_URL} from "@Resources/constants/url.constant";
import {GenericResponseType} from "@services/login/generic-response.type";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: Http) { }

  public createAuthor(author: AuthorType): Observable<AuthorType> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.post<GenericResponseType<AuthorType>, AuthorType>('author/create', author).pipe(
        map(value => value.body.data)
    );
  }

  public handleSaveLoadList(author: AuthorType): Observable<AuthorType[]> {
      return concat(this.createAuthor(author), this.getAll()) as Observable<AuthorType[]>;
  }

  public getAll(): Observable<AuthorType[]> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.get<GenericResponseType<AuthorType[]>>('author/list').pipe(
        map(value => {
          console.log('map value: ', value.body.data);
          return value.body.data;
        }),
    );
  }
}
