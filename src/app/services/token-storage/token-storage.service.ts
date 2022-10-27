import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    private tokenKey = 'auth-token';
    private userKey = 'auth-user';

    constructor() { }

    signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(this.tokenKey);
        window.sessionStorage.setItem(this.tokenKey, token);
    }

    public getToken(): string | null {
        return sessionStorage.getItem(this.tokenKey);
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(this.userKey);
        window.sessionStorage.setItem(this.userKey, JSON.stringify(user));
    }

    public getUser(): any {
        const user: any = sessionStorage.getItem(this.userKey);
        return JSON.parse(user);
    }

}
