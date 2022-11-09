import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    // protected baseUrl = 'http://localhost:8080/api/';
    protected baseUrl = 'https://doris-api-2.herokuapp.com/api/';
    protected httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor() { }
}
