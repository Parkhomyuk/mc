import { Component, OnInit,OnDestroy, Input , HostListener, Renderer2, ElementRef} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {parseUrl, stringify} from 'query-string';


import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {feedSelector, isLoadingSelector, isErrorSelector} from 'src/app/shared/modules/feed/store/selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  @Input('apiUrl') apiUrlProps: string;
   
  queryParamsSubscibtion: Subscription; 
  currentPageNumber: number=0;
  limit: number=10;
  baseUrl: string;
  isLoading$: Observable<boolean>;
  feeds$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string |null>
  constructor(private store: Store, private el: ElementRef, private renderer: Renderer2, private router: Router, private route: ActivatedRoute) {
   

   }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListener();
    
    console.log('url', this.router.url)
    
  }

  initializeValues(): void {
    this.isLoading$=this.store.pipe(select(isLoadingSelector));
    this.error$=this.store.pipe(select(isErrorSelector));
    this.feeds$= this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0]; 
  }
  initializeListener():void{
    this.queryParamsSubscibtion= this.route.queryParams.subscribe((params: Params)=>{console.log('params', params); this.currentPageNumber=Number(params.page) || Number('1')});
    this.fetchData();
  }
  fetchData(): void {
    const offset= this.currentPageNumber*this.limit-this.limit;
    const parseUrlF=parseUrl(this.apiUrlProps);
    const stringifyParams= stringify({limit: this.limit, offset, ...parseUrlF.query});
    const apiUrlWithParams =`${parseUrlF.url}?${stringifyParams}`;
    console.log('stringifyParams', offset);
    console.log('parseUlrl', apiUrlWithParams);
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  onSelectPage(state: any): void{
      this.limit=state.limit;
      this.currentPageNumber=state.page;
      console.log('page+limit',{page: this.currentPageNumber, limit: this.limit});
      console.log('route', this.route)
      this.router.navigate( [''], { queryParams: state});
      this.fetchData()
  }

  ngOnDestroy(): void{
    this.queryParamsSubscibtion.unsubscribe();
  }


}
