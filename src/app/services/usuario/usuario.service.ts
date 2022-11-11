import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioRequest } from 'src/app/models/request/UsuarioRequest';
import { MensagemResponse } from 'src/app/models/response/MensagemResponse';
import { GeneralService } from '../general-services/general.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends GeneralService {

    constructor(private http: HttpClient) {
        super();
    }

    cadastrarUsuario(usuario: UsuarioRequest): Observable<MensagemResponse> {
        return this.http.post<MensagemResponse>(this.baseUrl + 'usuario/cadastro', usuario);
    }
}
