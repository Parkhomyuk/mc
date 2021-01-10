import {ActionTypes} from 'src/app/shared/modules/feed/store/actionType';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {createAction, props} from '@ngrx/store';

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{url:string}>());
export const getFeedSuccessAction = createAction(ActionTypes.GET_FEED_SUCCESS, props<{feed:GetFeedResponseInterface}>());
export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);