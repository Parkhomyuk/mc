import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  serverName=' '
  nameProfile = new FormGroup({
    firstName: new FormControl(''),
    lastName:new FormControl(''),
  });
  constructor(private fb: FormBuilder ) { }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submit', this.profileForm.value)
  }

  profileForm=this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    addres: this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:[''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
     
  })
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''))
  }

  

}
