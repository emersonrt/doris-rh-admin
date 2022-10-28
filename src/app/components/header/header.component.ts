import { TokenStorageService } from './../../services/token-storage/token-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() alternarBarraLateral: EventEmitter<void> = new EventEmitter<void>();

    constructor(private tokenStorageService: TokenStorageService) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

    teste() {
        console.log('ta aqui 1');
        
        this.alternarBarraLateral.emit();
    }

}
