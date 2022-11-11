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
        let options = new HttpParams({
            fromObject: {
                'page': params.page,
                'size': params.pageSize,
                'sort': params.sort + ',' + params.sortDirection,
                'nome': params.filtros.nome,
                'areaInteresse': params.filtros.areaInteresse,
                'dataCadastro': params.filtros.dataCadastro,
                'idiomas': params.filtros.idiomas,
                'hardSkills': params.filtros.hardSkills,
                'softSkills': params.filtros.softSkills
            }
        })

        return this.http.get<CandidatoTabelaResponse>(this.baseUrl + 'candidato/paginado', { params: options });
    }

    buscarCandidatoDetalhe(idCandidato: string): Observable<CandidatoDetalhadoResponse> {
        const options = { params: new HttpParams().set('id', idCandidato) };
        return this.http.get<CandidatoDetalhadoResponse>(this.baseUrl + 'candidato', options);
    }

}
