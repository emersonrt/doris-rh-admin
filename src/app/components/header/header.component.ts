import { TokenStorageService } from './../../services/token-storage/token-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() alternarBarraLateral: EventEmitter<void> = new EventEmitter<void>();

    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

    alternarMenuLateral() {
        this.alternarBarraLateral.emit();
    }

    redirectConfiguracaoConta() {
        this.router.navigateByUrl('/configuracao-conta');
    }

}
