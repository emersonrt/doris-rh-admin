import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credenciais } from 'src/app/models/request/Credenciais';
import { GeneralService } from '../general-services/general.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends GeneralService {

    constructor(private http: HttpClient) {
        super();
    }

    login(credenciais: Credenciais): Observable<any> {
        return this.http.post(this.baseUrl + 'auth/login', credenciais, this.httpOptions);
    }

}
