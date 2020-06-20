import { HttpErrorResponse } from '@angular/common/http';

export const API_BASE_URL = 'http://localhost:3131';
export const MESSAGE_CLIENT_ERROR_HTTP = (message: HttpErrorResponse) => `An error occurred:, ${message.message}`;
export const MESSAGE_SERVE_ERROR_HTTP = (error: HttpErrorResponse) => `Backend return code ${error.status} body was: ${error.message}`;
