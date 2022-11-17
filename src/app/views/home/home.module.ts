import { BrasilPaginatorIntl } from './../../utils/paginacao-brasil/brasil-paginator-intl.service';
import { FiltrosCandidatoTabelaModule } from './../../components/filtros-candidato-tabela/filtros-candidato-tabela.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { PipesModule } from 'src/app/utils/pipes/pipes.module';
import { DetalhesCandidatoModalModule } from 'src/app/components/detalhes-candidato-modal/detalhes-candidato-modal.module';
import { MatPaginatorIntl } from '@angular/material/paginator';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        PipesModule,
        DetalhesCandidatoModalModule,
        FiltrosCandidatoTabelaModule
    ],
    exports: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [{ provide: MatPaginatorIntl, useClass: BrasilPaginatorIntl }],
})
export class HomeModule { }
