import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciais } from 'src/app/models/request/Credenciais';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    estaCarregando: boolean = false;

    estaLogado = false;
    loginFalhou = false;
    mensagemErro = 'Preencha corretamente, por favor.';

    loginForm = this.fb.nonNullable.group({
        nomeUsuario: ['', [Validators.required]],
        senha: ['', [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private tokenStorage: TokenStorageService
    ) { }

    get nomeUsuario() {
        return this.loginForm.get('nomeUsuario')!;
    }

    get senha() {
        return this.loginForm.get('senha')!;
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.estaLogado = true;
        }
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        this.estaCarregando = true;

        let credenciais: Credenciais = {
            nomeUsuario: this.loginForm.controls.nomeUsuario.value,
            senha: this.loginForm.controls.senha.value
        };
        this.authService.login(credenciais).subscribe({
            next: (data) => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);

                this.loginFalhou = false;
                this.estaLogado = true;
                this.reloadPage();
            },
            error: (err) => {
                this.mensagemErro = err.error.message || 'Erro ao efetuar operação';
                this.loginFalhou = true;
                this.estaCarregando = false;
                this.loginForm.controls.nomeUsuario.setErrors({ invalid: true });
                this.loginForm.controls.senha.setErrors({ invalid: true });
            }
        });
    }

    resetErros(): void {
        this.loginFalhou = false;
        this.mensagemErro = 'Preencha corretamente, por favor.';
    }

    reloadPage(): void {
        window.location.reload();
    }

}
