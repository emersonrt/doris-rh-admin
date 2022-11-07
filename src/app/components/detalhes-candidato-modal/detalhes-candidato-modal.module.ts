import { DetalhesCandidatoModalComponent } from './detalhes-candidato-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        DetalhesCandidatoModalComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        DetalhesCandidatoModalComponent
    ]
})
export class DetalhesCandidatoModalModule { }
