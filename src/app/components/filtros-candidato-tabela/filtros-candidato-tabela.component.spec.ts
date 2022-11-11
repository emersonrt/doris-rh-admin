import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosCandidatoTabelaComponent } from './filtros-candidato-tabela.component';

describe('FiltrosCandidatoTabelaComponent', () => {
    let component: FiltrosCandidatoTabelaComponent;
    let fixture: ComponentFixture<FiltrosCandidatoTabelaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FiltrosCandidatoTabelaComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FiltrosCandidatoTabelaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
