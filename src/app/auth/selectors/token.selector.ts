import { createSelector, createFeatureSelector } from "@ngrx/store";
import { IToken } from "../reducers/token.reducer";

export const tokenFeatureSelector = createFeatureSelector<IToken>('token');

export const selectTokenError = createSelector(tokenFeatureSelector, state => state.getTokenError)

