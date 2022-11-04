import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

    loginFalhou = false;
    perfisAcesso: string[] = [];
    mensagemErro = 'Preencha corretamente, por favor.';

    loginForm = this.fb.nonNullable.group({
        nomeUsuario: ['', [Validators.required]],
        senha: ['', [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    get nomeUsuario() {
        return this.loginForm.get('nomeUsuario')!;
    }

    get senha() {
        return this.loginForm.get('senha')!;
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.router.navigateByUrl('home');
        }
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        this.estaCarregando = true;

        let credenciais: Credenciais = {
            username: this.loginForm.controls.nomeUsuario.value,
            password: this.loginForm.controls.senha.value
        };
        this.authService.login(credenciais).subscribe({
            next: (data) => {
                this.tokenStorage.saveToken(data.token);
                this.tokenStorage.saveUser(data.username);

                this.loginFalhou = false;
                this.perfisAcesso = this.tokenStorage.getUser().perfisAcesso;
                this.reloadPage();
            },
            error: (err) => {
                // this.mensagemErro = err.status == 401 ? 'Nome de Usuário ou Senha inválidos.' : err.error?.message;
                this.snackBar.open('Nome de Usuário ou Senha inválidos!', 'Ok!', { duration: 6000 });
                this.loginFalhou = true;
                this.estaCarregando = false;
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
