import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'; 
import {switchMap, map,  catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs'; 
import {AuthService} from 'src/app/auth/services/auth.service';
import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {registerSuccessAction,  registerFailureAction, registerAction} from 'src/app/auth/store/actions/register.action';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class RegisterEffect{

    constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistanceService, private router: Router){}

    register$= createEffect(()=>this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request})=>{
            return this.authService.register(request)
            .pipe(
                map((currentUser: CurrentUserInterface)=>{
                    this.persistanceService.set('accessToken', currentUser.token)
                    return registerSuccessAction({currentUser})
                    }),
                catchError((errorResponse: HttpErrorResponse)=>{ return of( registerFailureAction({errors: errorResponse.error.errors })) })
            )
                
            
        })
    ))
    redirectAfterSubmit$= createEffect(()=>this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(()=>{
            this.router.navigateByUrl('/')
        })),
        {dispatch: false}
    )
}