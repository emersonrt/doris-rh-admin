import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-lateral',
    templateUrl: './menu-lateral.component.html',
    styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    redirecionar(url: string) {
        this.router.navigateByUrl(url);
    }

}
