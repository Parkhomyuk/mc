import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule  } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers'; 
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from 'src/app/auth/store/effects/register.effects';
import {LoginEffect} from 'src/app/auth/store/effects/login.effects';
import {getCurrentUserEffect} from 'src/app/auth/store/effects/getCurrentUser.effect';

import {AuthService} from 'src/app/auth/services/auth.service';
import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backendEorrorMessages/backendErrorMessages.module';
 

const routes: Routes=[
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CardModule,
   
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect,LoginEffect, getCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  providers:[AuthService, PersistanceService]
})
export class AuthModule { }
