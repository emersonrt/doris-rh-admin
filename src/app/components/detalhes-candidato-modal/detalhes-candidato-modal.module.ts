import { DetalhesCandidatoModalComponent } from './detalhes-candidato-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        DetalhesCandidatoModalComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        DetalhesCandidatoModalComponent
    ]
})
export class DetalhesCandidatoModalModule { }
