import { Injectable } from '@angular/core';
import {ClientType} from "@Resources/types/client.type";


@Injectable({ providedIn: 'root' })
export class StoreAuthenticate {
    private readonly tk = 'TK';

    public storeToken(token: ClientType) {
        localStorage.setItem(this.tk, JSON.stringify(token));
    }

    public getStoredTokens(): ClientType | undefined {
        const tkn = localStorage.getItem(this.tk);
        return tkn  ? JSON.parse(tkn) : undefined;
    }


    public logout() {
        localStorage.removeItem(this.tk);
    }
}
