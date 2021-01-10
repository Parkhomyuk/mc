import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'; 
import {switchMap, map,  catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs'; 
import {AuthService} from 'src/app/auth/services/auth.service';
import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {loginSuccessAction,  loginFailureAction, loginAction} from 'src/app/auth/store/actions/login.action';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class LoginEffect{

    constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistanceService, private router: Router){}

    login$= createEffect(()=>this.actions$.pipe(
        ofType(loginAction),
        switchMap(({request})=>{
            return this.authService.login(request)
            .pipe(
                map((currentUser: CurrentUserInterface)=>{
                    this.persistanceService.set('accessToken', currentUser.token)
                    return loginSuccessAction({currentUser})
                    }),
                catchError((errorResponse: HttpErrorResponse)=>{ return of( loginFailureAction({errors: errorResponse.error.errors })) })
            )
                
            
        })
    ))
    redirectAfterSubmit$= createEffect(()=>this.login$.pipe(
        ofType(loginSuccessAction),
        tap(()=>{
            this.router.navigateByUrl('/')
        })),
        {dispatch: false}
    )
}