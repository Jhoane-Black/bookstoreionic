import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export interface HttpType {
	apiUrl: string;
	retry: number;
	get<T>(url: string): Observable<HttpResponse<T>>;
	post<T, k>(url: string, data: k);
	put<T, K>(url: string, body: K);
	delete<T>(url: string, body, headers);
}
