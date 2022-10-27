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

    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
        } else {
            this.router.navigateByUrl('login');
        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

}
