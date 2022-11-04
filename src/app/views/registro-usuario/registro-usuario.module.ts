import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        RegistroUsuarioComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        RegistroUsuarioComponent
    ]
})
export class RegistroUsuarioModule { }
