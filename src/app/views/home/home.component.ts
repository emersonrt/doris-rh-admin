import { FiltrosCandidatoTabelaComponent } from './../../components/filtros-candidato-tabela/filtros-candidato-tabela.component';
import { DadosPaginadosRequest } from './../../models/request/DadosPaginadosRequest';
import { CandidatoService } from './../../services/candidato/candidato.service';
import { CandidatoTabela } from './../../models/CandidatoTabela';
import { AfterViewInit, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, merge, of, startWith, Subject, switchMap } from 'rxjs';
import { OrdenacaoDirecao } from 'src/app/models/enums/OrdenacaoDirecao.enum';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesCandidatoModalComponent } from 'src/app/components/detalhes-candidato-modal/detalhes-candidato-modal.component';

const filtrosIniciais: DadosPaginadosRequest = {
    page: 0,
    pageSize: 15,
    sort: 'nome',
    sortDirection: OrdenacaoDirecao.ASCENDENTE,
    filtros: {
        nome: '',
        areaInteresse: '',
        dataCadastro: '',
        idiomas: [],
        hardSkills: [],
        softSkills: []
    }
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    colunas: string[] = [
        'nome',
        'dataCadastro',
        'areaInteresse',
        'hardSkills',
        'softSkills',
        'idiomas',
        'acoes'];
    dadosTabela: MatTableDataSource<CandidatoTabela> = new MatTableDataSource();
    carregandoDados: boolean = true;
    filtroPaginacao: DadosPaginadosRequest = filtrosIniciais;
    lengthDados: number = 0;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(FiltrosCandidatoTabelaComponent) filtro!: FiltrosCandidatoTabelaComponent;

    constructor(
        private candidatoService: CandidatoService,
        public dialog: MatDialog
    ) { }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        this.carregandoDados = false;
        merge(this.sort.sortChange, this.paginator.page, this.filtro.filtroChange)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.filtroPaginacao.page = this.paginator.pageIndex;
                    this.filtroPaginacao.pageSize = this.paginator.pageSize;
                    this.filtroPaginacao.sort = this.sort.active;
                    this.filtroPaginacao.sortDirection = this.sort.direction;
                    this.filtroPaginacao.filtros = this.filtro.filtros;
                    this.carregandoDados = true;
                    return this.candidatoService.buscarCandidatosPaginado(this.filtroPaginacao
                    ).pipe(catchError(() => of(null)));
                }),
                map(data => {
                    this.lengthDados = data?.totalElements || 0;
                    return data?.empty ? [] : data?.content
                }),
            )
            .subscribe(data => {
                this.carregandoDados = false;
                this.dadosTabela = new MatTableDataSource<CandidatoTabela>(data);
            });
    }

    ngOnInit(): void {
    }

    abrirDetalhesCandidato(idCandidato: string) {
        this.dialog.open(DetalhesCandidatoModalComponent, { data: idCandidato });
    }

    formataListaItens(item: string, index: number, lastIndex: number): string {
        return (index + 1) == lastIndex ? item : item + ', ';
    }

}
