import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {Store} from '@ngrx/store';
import {getCurrentUserAction} from 'src/app/auth/store/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-dream-app';
  color = 'blue';
  constructor(private primengConfig: PrimeNGConfig, private store: Store) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.store.dispatch(getCurrentUserAction())

}

}
