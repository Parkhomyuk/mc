import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; 
 
import {CardModule} from 'primeng/card';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  resipies: any;
  city: string;
  boxes: Array<number> = new Array(24);
    selectedCategory: any = null;

    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

  constructor(private fb: FormBuilder,private primengConfig: PrimeNGConfig) {
     
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.selectedCategory = this.categories[1];
    this.resipies=this.fb.group({

      name: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      amount: [null,Validators.required]
    })
  }

  onAddItem(){
    console.log('f',this.resipies )
  }

}
