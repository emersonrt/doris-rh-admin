import { NgModule } from '@angular/core';
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

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HeaderModule,
        MaterialModule,
        BrowserModule,
        HttpClientModule,
        HomeModule,
        LoginModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
