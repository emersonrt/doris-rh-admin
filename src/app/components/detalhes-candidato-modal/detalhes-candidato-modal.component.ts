import { throwError } from 'rxjs';
import { CandidatoService } from './../../services/candidato/candidato.service';
import { Component, ElementRef, Inject, OnInit, ViewChild, AfterViewInit, AfterContentInit, AfterContentChecked, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidatoDetalhadoResponse } from 'src/app/models/response/CandidatoDetalhadoResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-detalhes-candidato-modal',
    templateUrl: './detalhes-candidato-modal.component.html',
    styleUrls: ['./detalhes-candidato-modal.component.scss']
})
export class DetalhesCandidatoModalComponent implements OnInit, AfterContentChecked {

    @ViewChild("buttonFecharModal", { read: ElementRef }) buttonFecharModal!: ElementRef;

    erroNaConsulta: boolean = false;
    dadosCandidato: CandidatoDetalhadoResponse | undefined;
    formCandidato!: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public idCandidato: string,
        private candidatoService: CandidatoService,
        private snackBar: MatSnackBar,
        private fb: FormBuilder
    ) { }

    get hardSkills() {
        return this.formCandidato.controls["hardSkills"] as FormArray;
    }

    get softSkills() {
        return this.formCandidato.controls["softSkills"] as FormArray;
    }

    get certificacoes() {
        return this.formCandidato.controls["certificacoes"] as FormArray;
    }

    get experiencias() {
        return this.formCandidato.controls["experiencias"] as FormArray;
    }

    get formacoes() {
        return this.formCandidato.controls["formacoes"] as FormArray;
    }

    get idiomas() {
        return this.formCandidato.controls["idiomas"] as FormArray;
    }

    get linksRelevantes() {
        return this.formCandidato.controls["linksRelevantes"] as FormArray;
    }

    ngOnInit(): void {
        this.candidatoService.buscarCandidatoDetalhe(this.idCandidato).subscribe({
            next: (response) => {
                if (!response.id) return;
                this.carregarDadosForm(response);
            },
            error: (err: HttpErrorResponse) => {
                this.snackBar.open('Erro: ' + err.error.message, undefined, { duration: 3000 });
                this.erroNaConsulta = true;
            }
        });
    }

    ngAfterContentChecked(): void {
        if (this.erroNaConsulta) {
            this.buttonFecharModal.nativeElement.click();
            this.erroNaConsulta = false;
        }
    }

    carregarDadosForm(dado: CandidatoDetalhadoResponse) {
        this.formCandidato = this.fb.group({
            nome: this.fb.control(dado.nome),
            dataNascimento: [dado.dataNascimento],
            telefoneCelular: [dado.telefoneCelular],
            email: [dado.email],
            hardSkills: this.fb.array([]),
            softSkills: this.fb.array([]),
            formacoes: this.fb.array([]),
            linksRelevantes: this.fb.array([]),
            cargaHoraria: [dado.cargaHoraria],
            turno: [dado.turno],
            modalidadeTrabalho: [dado.modalidadeTrabalho],
            cidadeResidencia: [dado.cidadeResidencia],
            disponibilidadeRealocacao: [{value: dado.disponibilidadeRealocacao, disabled: true}],
            areaInteresse: [dado.areaInteresse],
            idiomas: this.fb.array([]),
            certificacoes: this.fb.array([]),
            experiencias: this.fb.array([]),
            pontosFortes: [dado.pontosFortes],
            pontosFracos: [dado.pontosFracos],
            informacaoRelevante: [dado.informacaoRelevante]
        });

        dado.hardSkills.forEach(hardSkill => this.hardSkills.push(
            this.fb.group({
                habilidade: hardSkill.habilidade,
                tempoExperiencia: hardSkill.tempoExperiencia
            })
        ));

        dado.softSkills.forEach(softSkill => this.softSkills.push(
            this.fb.group({ habilidade: softSkill.habilidade })
        ));

        // this.formCandidato.disable();
        // dado.formacoes.forEach(formacao => this.formacoes.push(
        //     this.fb.group({
        //         habilidade: formacao.,
        //         tempoExperiencia: formacao.tempoExperiencia
        //     })
        // ));
    }


}
