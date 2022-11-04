import { CandidatoDetalhadoResponse } from './../../models/response/CandidatoDetalhadoResponse';
import { DadosPaginadosRequest } from './../../models/request/DadosPaginadosRequest';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from '../general-services/general.service';
import { CandidatoTabelaResponse } from 'src/app/models/response/CandidatoTabelaResponse';

@Injectable({
    providedIn: 'root'
})
export class CandidatoService extends GeneralService {

    constructor(private http: HttpClient) {
        super();
    }

    buscarCandidatosPaginado(params: DadosPaginadosRequest): Observable<CandidatoTabelaResponse> {
        const options = {
            params: new HttpParams()
                .set('page', params.page)
                .set('size', params.pageSize)
                .set('sort', params.sort + ',' + params.sortDirection)
        };
        return this.http.get<CandidatoTabelaResponse>(this.baseUrl + 'candidato/paginado', options);
    }

    buscarCandidatoDetalhe(idCandidato: string): Observable<CandidatoDetalhadoResponse> {
        const options = { params: new HttpParams().set('id', idCandidato) };
        return this.http.get<CandidatoDetalhadoResponse>(this.baseUrl + 'candidato', options);
    }

}
