import { Injectable } from '@angular/core';
import {Http} from "@Utils/class/http.class";
import {BookType} from "@Resources/types/book.type";
import {concat, Observable} from "rxjs";
import {API_BASE_URL} from "@Resources/constants/url.constant";
import {GenericResponseType} from "@services/login/generic-response.type";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: Http) { }

  public saveBook (book: BookType): Observable<BookType> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.post<GenericResponseType<BookType>, BookType>('book/create', book).pipe(
        map(value => value.body.data),
    );
  }

  public updateBook(book: BookType): Observable<BookType> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.put<GenericResponseType<BookType>, BookType>(`book/update/${book.book_id}`, book).pipe(
        map(value => value.body.data)
    );
  }

  public getAll(): Observable<BookType[]> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.get<GenericResponseType<BookType[]>>('book/list').pipe(
        map(value => value.body.data)
    );
  }

  public getById(id: number): Observable<BookType> {
    this.http.apiUrl = API_BASE_URL;
    return this.http.get<GenericResponseType<BookType>>(`book/${id}`).pipe(
        map(value => value.body.data),
    );
  }

  public handleSaveList(book: BookType): Observable<BookType[]> {
    return concat(this.saveBook(book), this.getAll()) as Observable<BookType[]>;
  }
}
