import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isLoggedIn = false;
    username: string | undefined;
    menuLateralAberto: boolean = true;

    private perfisAcesso: string[] = [];

    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.perfisAcesso = user.perfisAcesso;

            // const t = this.perfisAcesso.includes('ADMIN');
            this.username = user.username;

            this.router.navigateByUrl('home');
        } else {
            this.router.navigateByUrl('login');
        }
    }

}
