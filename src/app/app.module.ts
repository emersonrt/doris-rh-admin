import { DetalhesCandidatoModalModule } from './components/detalhes-candidato-modal/detalhes-candidato-modal.module';
import { ConfiguracaoContaModule } from './views/configuracao-conta/configuracao-conta.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderModule } from './components/header/header.module';
import { MenuLateralModule } from './components/menu-lateral/menu-lateral.module';
import { RegistroUsuarioModule } from './views/registro-usuario/registro-usuario.module';
import { errorInterceptorProviders } from './helpers/server-error.interceptor';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HeaderModule,
        MenuLateralModule,
        MaterialModule,
        BrowserModule,
        HttpClientModule,
        HomeModule,
        LoginModule,
        RegistroUsuarioModule,
        ConfiguracaoContaModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [errorInterceptorProviders, authInterceptorProviders],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
