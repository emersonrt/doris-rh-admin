import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoContaComponent } from './configuracao-conta.component';

describe('ConfiguracaoContaComponent', () => {
    let component: ConfiguracaoContaComponent;
    let fixture: ComponentFixture<ConfiguracaoContaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfiguracaoContaComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ConfiguracaoContaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
