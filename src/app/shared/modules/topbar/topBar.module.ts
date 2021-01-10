import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {Routes, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopbarComponent } from './components/topbar/topbar.component';
 

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        RouterModule,
        FontAwesomeModule 
    ],
    exports:[TopbarComponent],
    declarations:[TopbarComponent]
})

export class TopBarModule{}