import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeDirectiveDirective } from './some-directive.directive';
import {LoginComponent} from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
 
import {AuthModule} from 'src/app/auth/auth.module';
import {TopBarModule} from 'src/app/shared/modules/topbar/topBar.module';
import {GlobalFeedModule} from 'src/app/globalFeed/globalFeed.module';

import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {AuthInterceptor} from 'src/app/shared/services/authInterceptor.service';

import { CalendarComponent } from './calendar/calendar.component'; 
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TimelineComponent } from './timeline/timeline.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { MagazineComponent } from './magazine/magazine.component';
import { BlockHeaderComponent } from './magazine/block-header/block-header.component'; // Angular CLI environment
 
@NgModule({
  declarations: [
    AppComponent,
    SomeDirectiveDirective,
    LoginComponent,
    ShoppingEditComponent,
    CalendarComponent,
    TimelineComponent,
    Timeline2Component,
    MagazineComponent,
    BlockHeaderComponent,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RadioButtonModule,
    CardModule,
    ButtonModule,    
    CheckboxModule,
    

    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [PersistanceService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }