import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './components/spiner/spiner.component';



@NgModule({
  declarations: [SpinerComponent],
  imports: [
    CommonModule
  ],
  exports: [SpinerComponent]
})
export class SpinerModule { }
