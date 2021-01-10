import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagginationComponent } from './components/paggination/paggination.component';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [PagginationComponent],
  imports: [
    CommonModule,
    PaginatorModule,
  ],
  exports: [PagginationComponent]
})
export class PagginationModule { }
