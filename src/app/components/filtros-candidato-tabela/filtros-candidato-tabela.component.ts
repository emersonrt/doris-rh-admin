import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FiltrosEvent } from 'src/app/models/FiltrosEvent';
import { AREAS_INTERESSE, IDIOMAS, ULTIMOS_DIAS } from 'src/app/utils/constantes/Constantes';

@Component({
    selector: 'app-filtros-candidato-tabela',
    templateUrl: './filtros-candidato-tabela.component.html',
    styleUrls: ['./filtros-candidato-tabela.component.scss']
})
export class FiltrosCandidatoTabelaComponent {

    exibirFiltros: boolean = false;
    formFiltros!: FormGroup;
    filtros: FiltrosEvent = {
        nome: '',
        areaInteresse: '',
        dataCadastro: '',
        idiomas: [],
        hardSkills: [],
        softSkills: []
    };

    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    readonly areaInteresseList: string[] = AREAS_INTERESSE;
    readonly dataCadastroList = ULTIMOS_DIAS;
    readonly idiomasList: string[] = IDIOMAS;
    readonly filtroChange: EventEmitter<FiltrosEvent> = new EventEmitter<FiltrosEvent>;

    constructor(private fb: FormBuilder) {
        this.formFiltros = this.getFormInicial();
    }

    get hardSkills() {
        return this.formFiltros.controls["hardSkills"];
    }

    get softSkills() {
        return this.formFiltros.controls["softSkills"];
    }

    aplicarFiltros() {
        this.filtros = {
            nome: this.formFiltros.get('nome')?.value,
            areaInteresse: this.formFiltros.get('areaInteresse')?.value,
            dataCadastro: this.formFiltros.get('dataCadastro')?.value,
            idiomas: this.formFiltros.get('idiomas')?.value,
            hardSkills: this.formFiltros.get('hardSkills')?.value,
            softSkills: this.formFiltros.get('softSkills')?.value
        } as FiltrosEvent;
        console.log(this.filtros);

        this.filtroChange.emit();
    }

    limparFiltros() {
        this.formFiltros = this.getFormInicial();
        this.aplicarFiltros();
    }

    adicionarHardSkill(event: any) {
        const value = (event.value || '').trim();

        if (value) {
            this.hardSkills.value.push(event.value);
        }

        event.chipInput!.clear();
    }

    removeHardSkill(hardSkill: string) {
        const index = this.hardSkills.value.indexOf(hardSkill);

        if (index >= 0) {
            this.hardSkills.value.splice(index, 1);
        }
    }

    adicionarSoftSkill(event: any) {
        const value = (event.value || '').trim();

        if (value) {
            this.softSkills.value.push(event.value);
        }

        event.chipInput!.clear();
    }

    removeSoftSkill(softSkills: string) {
        const index = this.softSkills.value.indexOf(softSkills);

        if (index >= 0) {
            this.softSkills.value.splice(index, 1);
        }
    }

    getFormInicial(): FormGroup {
        return this.fb.group({
            nome: this.fb.control(''),
            areaInteresse: this.fb.control(''),
            dataCadastro: this.fb.control(''),
            idiomas: this.fb.control([]),
            hardSkills: this.fb.control([]),
            softSkills: this.fb.control([])
        });
    }

}
