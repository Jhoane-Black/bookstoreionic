import { Injectable } from '@angular/core';
import { API_BASE_URL, MESSAGE_CLIENT_ERROR_HTTP, MESSAGE_SERVE_ERROR_HTTP } from '@Resources/constants/url.constant';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpType } from '@Resources/types/http.type';
import { catchError, retry } from 'rxjs/operators';
import { HTTP_OPTIONS_OBSERVE_RESPONSE } from '@Resources/constants/label.constant';
import { StoreAuthenticate } from '@Utils/class/store-auth.class';

@Injectable({
	providedIn: 'root',
})
export class Http implements HttpType {
	private _apiUrl: string = API_BASE_URL;
	private _retry = 2;
	private _headers: HttpHeaders | { [name: string]: string | string[] };

	constructor(private http: HttpClient, private storeAuth: StoreAuthenticate) {
		this.initialize();
	}

	static handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error(MESSAGE_CLIENT_ERROR_HTTP(error));
		} else {
			console.error(MESSAGE_SERVE_ERROR_HTTP(error));
		}
		return throwError('Something bad happened; please try again later.');
	}

	private initialize() {
		// const tokens = this.storeAuth.getStoredTokens();
		// if (tokens) {
		// 	this._headers = new HttpHeaders({
		// 		Authorization: `Bearer ${tokens.token}`,
		// 	});
		// }
	}

	public generateHeaders(key: string, value: string): HttpHeaders | { [name: string]: string | string[] } {
		return new HttpHeaders({
			[key]: value,
		});
	}

	get<T>(url: string = '', headers: HttpHeaders | { [name: string]: string | string[] } = this._headers): Observable<HttpResponse<T>> {
		this.initialize();
		return this.http
			.get<T>(`${this._apiUrl + url}`, { observe: HTTP_OPTIONS_OBSERVE_RESPONSE, headers })
			.pipe(
				retry(this._retry),
				catchError((err: HttpErrorResponse) => Http.handleError(err))
			);
	}

	post<T, K>(
		url: string = '',
		data: K,
		headers: HttpHeaders | { [name: string]: string | string[] } = this._headers
	): Observable<HttpResponse<T>> {
		this.initialize();
		return this.http
			.post<T>(`${this._apiUrl + url}`, data, { observe: HTTP_OPTIONS_OBSERVE_RESPONSE, headers })
			.pipe(
				retry(this._retry),
				catchError((err: HttpErrorResponse) => Http.handleError(err))
			);
	}

	put<T, K>(
		url: string,
		body: K,
		headers: HttpHeaders | { [name: string]: string | string[] } = this._headers
	): Observable<HttpResponse<T>> {
		this.initialize();
		return this.http
			.put<T>(`${this._apiUrl + url}`, body, { observe: HTTP_OPTIONS_OBSERVE_RESPONSE, headers })
			.pipe(
				retry(this._retry),
				catchError((err: HttpErrorResponse) => Http.handleError(err))
			);
	}

	delete<T>(url: string, headers: HttpHeaders | { [name: string]: string | string[] } = this._headers): Observable<HttpResponse<T>> {
		this.initialize();
		return this.http
			.delete<T>(`${this._apiUrl + url}`, { observe: HTTP_OPTIONS_OBSERVE_RESPONSE, headers })
			.pipe(
				retry(this._retry),
				catchError((err: HttpErrorResponse) => Http.handleError(err))
			);
	}

	get apiUrl(): string {
		return this._apiUrl;
	}

	set apiUrl(value: string) {
		this._apiUrl = value;
	}

	get retry(): number {
		return this._retry;
	}

	set retry(value: number) {
		this._retry = value;
	}
}
