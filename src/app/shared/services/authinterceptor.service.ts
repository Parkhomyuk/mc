import {Injectable} from '@angular/core';
import{HttpRequest, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private persistanceService: PersistanceService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this.persistanceService.get('accessToken');
        request= request.clone({
            
            setHeaders:{
                Authorization: token ? `Token ${token}` : '',
            }
        })
        return next.handle(request)
    }
}