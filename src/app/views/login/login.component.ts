import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    estaCarregando: boolean = false;

    loginForm = this.fb.nonNullable.group({
        username: ['', [Validators.required]],
        senha: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private router: Router) { }

    get username() {
        return this.loginForm.get('username')!;
    }

    get senha() {
        return this.loginForm.get('senha')!;
    }

    ngOnInit(): void {
    }

    login() {
        console.log('tentando logar', this.loginForm.controls.senha.errors);
        
    }

}
