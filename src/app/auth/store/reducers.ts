
import {AuthStateInterface} from '../types/authState.interface';
import {on, createReducer, Action} from '@ngrx/store';
import {registerAction, registerSuccessAction, registerFailureAction} from './actions/register.action';
import {loginAction, loginSuccessAction, loginFailureAction} from './actions/login.action';
import {getCurrentUserSuccessAction,getCurrentUserAction, getCurrentUserFailureAction} from 'src/app/auth/store/actions/getCurrentUser.action';

import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';

const initialState: AuthStateInterface={
    isSubmitting: false,
    currentUser: null,    
    isLoggedIn: false,
    validationErrors: null,
    isLoading: false
}

const authReducer= createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface=>({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state,action): AuthStateInterface=>({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true
    })),
    on(registerFailureAction, (state,action): AuthStateInterface=>({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
        isLoggedIn: false
    })),
    on( loginAction, (state): AuthStateInterface=>({
        ...state,
        isSubmitting: true,
        validationErrors: null,        
    })),
    on( loginSuccessAction, (state,action): AuthStateInterface=>({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true

    })),
    on(loginFailureAction, (state, action): AuthStateInterface=>({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,         
        
    })),
    on(getCurrentUserAction, (state): AuthStateInterface=>({
        ...state,
        isLoading: true,
    })),
    on(getCurrentUserSuccessAction, (state,action): AuthStateInterface=>({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(getCurrentUserFailureAction, (state): AuthStateInterface=>({
        ...state,
        isLoggedIn: false,
        isLoading: false,
        currentUser: null,
    }))


     

     
)

export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}