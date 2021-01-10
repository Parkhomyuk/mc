import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {MenuItem} from 'primeng/api';
import { faCoffee,faLock } from '@fortawesome/free-solid-svg-icons';

import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {isLoggedInSelector, isAnonimusSelector, isCurrentUser } from 'src/app/auth/store/selectors';


@Component({
  selector: 'mc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  lock=faLock;
  loggedIn$: Observable<boolean>;
  isAnonimus$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;  

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loggedIn$=this.store.pipe(select(isLoggedInSelector )); 
    this.isAnonimus$= this.store.pipe(select(isAnonimusSelector));
    this.currentUser$ = this.store.pipe(select(isCurrentUser));
  }

}
