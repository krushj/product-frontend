import { createAction, props } from "@ngrx/store";

const getToken = createAction('[Token] GET', props<{username: string, password: string}>())
const getTokenSucess = createAction('[Token] GET SUCCESS')
const getTokenFailure = createAction('[Token] GET FAILURE', props<{error: string}>())


const loadToken = createAction('[Token] LOAD')
const loadTokenSuccess = createAction('[TOKEN] LOAD SUCCESS')
const loadTokenFailure = createAction('[TOKEN] LOAD FAILURE', props<{error: string}>())

const removeToken = createAction('[TOKEN] REMOVE')
const removeTokenSuccess = createAction('[TOKEN] REMOVE SUCCESS')
const removeTokenFailure = createAction('[TOKEN] REMOVE FAILURE')


export {
    getToken,
    getTokenSucess,
    getTokenFailure,

    
    loadToken,
    loadTokenSuccess,
    loadTokenFailure,

    removeToken,
    removeTokenSuccess,
    removeTokenFailure
}