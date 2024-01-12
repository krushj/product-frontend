import { createReducer, on } from "@ngrx/store";
import * as tokenActions from "../actions/token.actions"
export interface IToken{
    getTokenError: string
}

const initialState: IToken = {
    getTokenError: "",
}

export const TokenReducer = createReducer(
    initialState,
    on(tokenActions.getTokenFailure, (state, {error}) => ({...state, getTokenError: error})),
);

