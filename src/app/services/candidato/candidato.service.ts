import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general-services/general.service';

@Injectable({
    providedIn: 'root'
})
export class CandidatoService extends GeneralService {

    constructor(private http: HttpClient) {
        super();
    }


}
