import { ConfiguracaoContaComponent } from './views/configuracao-conta/configuracao-conta.component';
import { RegistroUsuarioComponent } from './views/registro-usuario/registro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registro-usuario', component: RegistroUsuarioComponent },
    { path: 'configuracao-conta', component: ConfiguracaoContaComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
