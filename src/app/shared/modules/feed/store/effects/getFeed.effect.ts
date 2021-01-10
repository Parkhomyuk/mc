
import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects'; 
import {switchMap, map,  catchError} from 'rxjs/operators';
import {of} from 'rxjs'; 
import {FeedService} from 'src/app/shared/modules/feed/services/feedService.service';

import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {getFeedAction, getFeedSuccessAction, getFeedFailureAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {HttpErrorResponse} from '@angular/common/http';
 

@Injectable()
export class GetFeedEffect{

    constructor(private actions$: Actions, private feedService: FeedService){}

    getFeed$= createEffect(()=>this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url})=>{             
            return this.feedService.getFeed(url)
            .pipe(
                map((feed: GetFeedResponseInterface)=>{
                    
                    return getFeedSuccessAction({feed})
                    }),
                catchError(()=>{ return of( getFeedFailureAction()) })
            )               
            
        })
    ))
     
}