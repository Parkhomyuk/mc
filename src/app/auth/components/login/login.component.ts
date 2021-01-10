import { Component, OnInit, OnDestroy  } from '@angular/core';
import {environment} from 'src/environments/environment';
import { PrimeNGConfig } from 'primeng/api';
import { faCoffee,faLock } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 

import {Store,select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loginAction} from 'src/app/auth/store/actions/login.action';
import {isSubmittingSelector, isLoggedInSelector, validationErrorsSelector} from 'src/app/auth/store/selectors'; 

import{RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {AuthService} from 'src/app/auth/services/auth.service';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy  {
  lock = faLock;   
  loginForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  validation: RegExp;
  validationEmail: RegExp;
  validationPassword: RegExp;

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder, private store: Store, private authService: AuthService) { 
    this.validation= new RegExp('^[A-Za-z][A-Za-z0-9]*$');
    this.validationEmail= environment.validationEmail;
    this.validationPassword= environment.validationPassword;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
     this.createForm();
     this.initializeValues();
     console.log('valid',this.loginForm.valid);
     console.log('this.isSubmitting$',this.isSubmitting$);
     
      
  }

   

  initializeValues(): void{
    this.isSubmitting$=this.store.pipe(select(isSubmittingSelector));
    this.isLoggedIn$=this.store.pipe(select(isLoggedInSelector));
    this.backendErrors$= this.store.pipe(select(validationErrorsSelector))
  }

  createForm(){
    this.loginForm=this.fb.group({      
      email: ['', [Validators.required, Validators.pattern( this.validationEmail)]],
      password:[null, [Validators.required, Validators.pattern(this.validationPassword)]],
    })
  }

  onAddItem(){
    console.log('form', this.loginForm.value);
    const request: RegisterRequestInterface={
      user: this.loginForm.value
    }
    this.store.dispatch(loginAction({request}));
    // this.authService.register(request).subscribe(data=> console.log('user', data))
     this.isLoggedIn$.subscribe(data=>{console.log('selector', data )
      if(data===true){
        this.loginForm.reset()
      }
     
     })
     
    
   
    
  }
  get username() { return this.loginForm.get('username'); };
  get password() {return this.loginForm.get('password');};
  get email() {return this.loginForm.get('email');};
   

    ngOnDestroy(): void{
         
    }
  

}
