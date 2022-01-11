import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { transactionReducer, TransactionState } from './transaction.reducers';


export interface AppState {
  transactionState: TransactionState
}

export const reducers: ActionReducerMap<AppState> = {
  transactionState: transactionReducer
};


