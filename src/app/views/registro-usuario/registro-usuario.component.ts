import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TokenStorageService } from './../../services/token-storage/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UsuarioRequest } from 'src/app/models/request/UsuarioRequest';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-registro-usuario',
    templateUrl: './registro-usuario.component.html',
    styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

    ehAdmin: Boolean = false;
    usuarioForm!: FormGroup;

    constructor(
        private tokenStorageService: TokenStorageService,
        private fb: FormBuilder,
        private usuarioService: UsuarioService,
        private snackBar: MatSnackBar
    ) {
        this.usuarioForm = this.getFormInicial();
    }

    ngOnInit(): void {
        this.usuarioForm.disable();

        const user = this.tokenStorageService.getUser();
        if (user.perfisAcesso.includes('ADMIN')) {
            this.ehAdmin = true;
            this.usuarioForm.enable();
        }
    }

    cadastrarUsuario(ngForm: any) {
        if (!this.usuarioForm.valid) return;

        const dadosCadastro = {
            username: this.usuarioForm.get('nomeUsuario')?.value,
            email: this.usuarioForm.get('email')?.value,
            password: this.usuarioForm.get('senha')?.value
        } as UsuarioRequest;
        this.usuarioService.cadastrarUsuario(dadosCadastro).subscribe({
            next: (response) => {
                ngForm.reset();
                this.snackBar.open(response.message, undefined, { duration: 5000 });
            },
            error: (err: HttpErrorResponse) => {
                this.snackBar.open(err.error.message, 'Ok!', { duration: 10000 });
            }
        });
    }

    private getFormInicial(): FormGroup {
        return this.fb.group({
            nomeUsuario: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
        });
    }

}
