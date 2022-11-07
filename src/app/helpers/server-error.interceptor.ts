import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage/token-storage.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            // retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && this.tokenService.getToken()) {
                    this.tokenService.signOut();
                    window.location.reload();
                }
                return throwError(error);
            }));
    }
}

export const errorInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true, deps: [TokenStorageService] }
];