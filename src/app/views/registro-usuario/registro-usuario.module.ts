import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        RegistroUsuarioComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        RegistroUsuarioComponent
    ]
})
export class RegistroUsuarioModule { }
