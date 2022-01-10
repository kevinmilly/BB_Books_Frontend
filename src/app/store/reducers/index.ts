import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';


export interface Transaction {

}

export const reducers: ActionReducerMap<Transaction> = {

};


export const metaReducers: MetaReducer<Transaction>[] = !environment.production ? [] : [];
