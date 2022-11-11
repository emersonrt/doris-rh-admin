import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosCandidatoTabelaComponent } from './filtros-candidato-tabela.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        FiltrosCandidatoTabelaComponent
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule
    ],
    exports: [
        FiltrosCandidatoTabelaComponent
    ]
})
export class FiltrosCandidatoTabelaModule { }
