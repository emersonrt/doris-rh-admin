import { DetalhesCandidatoModalComponent } from './detalhes-candidato-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'src/app/utils/pipes/pipes.module';



@NgModule({
    declarations: [
        DetalhesCandidatoModalComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        PipesModule,
        NgxMaskModule.forRoot()
    ],
    exports: [
        DetalhesCandidatoModalComponent
    ]
})
export class DetalhesCandidatoModalModule { }
