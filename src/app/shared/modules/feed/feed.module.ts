import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FeedComponent } from './components/feed/feed.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import {reducers} from 'src/app/shared/modules/feed/store/reducers';
import {FeedService} from 'src/app/shared/modules/feed/services/feedService.service';

import {SpinerModule} from 'src/app/shared/modules/spiner/spiner.module';
import {PagginationModule} from 'src/app/shared/modules/paggination/paggination.module';

import { TabViewModule } from 'primeng/tabview';
 
import { ButtonModule } from 'primeng/button';
import {OrderListModule} from 'primeng/orderlist';
import { BadgetComponent } from './components/badget/badget.component';




@NgModule({
  declarations: [FeedComponent, BadgetComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]), 
    StoreModule.forFeature('feed', reducers),
    TabViewModule,
    ButtonModule,
    OrderListModule,     
    FormsModule,
    SpinerModule,
    PagginationModule,
    
  ],
  exports:[FeedComponent],
  providers:[FeedService]
})
export class FeedModule { }
