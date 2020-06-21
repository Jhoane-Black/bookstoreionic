import { Injectable } from '@angular/core';
import {ClientType} from "@Resources/types/client.type";
import {Observable, of} from "rxjs";


@Injectable({ providedIn: 'root' })
export class StoreAuthenticate {
    private readonly tk = 'TK';
    public onLogin: Observable<ClientType | null>;

    public storeToken(token: ClientType) {
        localStorage.setItem(this.tk, JSON.stringify(token));
        this.onLogin = of(token);
    }

    public getStoredTokens(): ClientType | undefined {
        const tkn = localStorage.getItem(this.tk);
        return tkn  ? JSON.parse(tkn) : undefined;
    }

    public getStoredToken$(): void {
        const tkn = localStorage.getItem(this.tk);
        this.onLogin = tkn ? of(JSON.parse(tkn)) : of(null);
    }


    public logout() {
        localStorage.removeItem(this.tk);
        this.onLogin = null;
    }
}
