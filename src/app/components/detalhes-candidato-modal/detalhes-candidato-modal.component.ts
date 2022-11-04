import { throwError } from 'rxjs';
import { CandidatoService } from './../../services/candidato/candidato.service';
import { Component, ElementRef, Inject, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidatoDetalhadoResponse } from 'src/app/models/response/CandidatoDetalhadoResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-detalhes-candidato-modal',
    templateUrl: './detalhes-candidato-modal.component.html',
    styleUrls: ['./detalhes-candidato-modal.component.scss']
})
export class DetalhesCandidatoModalComponent implements OnInit {

    @ViewChild('botaoFechar') botaoFechar!: ElementRef<HTMLElement>;
    dadosCandidato: CandidatoDetalhadoResponse | undefined;

    constructor(
        @Inject(MAT_DIALOG_DATA) public idCandidato: string,
        private candidatoService: CandidatoService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        console.log(this.idCandidato);
        this.candidatoService.buscarCandidatoDetalhe(this.idCandidato).subscribe({
            next: (response) => {
                if (!response.id) {
                    return;
                }
                console.log('sucesso', response.id);
                this.dadosCandidato = response;
            },
            error: (err: HttpErrorResponse) => {
                this.snackBar.open('Erro: ' + err.error.message, undefined, { duration: 3000 });
            }
        });
    }

    fecharModal() {

    }

}
