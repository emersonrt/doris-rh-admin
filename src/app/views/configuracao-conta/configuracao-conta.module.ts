import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoContaComponent } from './configuracao-conta.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        ConfiguracaoContaComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        ConfiguracaoContaComponent
    ]
})
export class ConfiguracaoContaModule { }
