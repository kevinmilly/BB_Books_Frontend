import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Transaction } from "src/app/transactions/models/transaction.model";
import { addTransactionSuccess, removeTransactionSuccess, updateTransactionSuccess, } from "../actions/transaction.actions";
import * as fromAdapter from './transaction.adapter';

export interface TransactionState extends EntityState<Transaction> { };

export const transactionFeatureKey = 'transaction';

export const initialState: TransactionState = fromAdapter.adapter.getInitialState({
    error: undefined
})


export const transactionReducer = createReducer(initialState,
    on(addTransactionSuccess, (state, action) => fromAdapter.adapter.addOne(action.transaction, state)),
    on(updateTransactionSuccess, (state, action) => fromAdapter.adapter.updateOne(action.transaction, state)),
    on(removeTransactionSuccess, (state, action) => fromAdapter.adapter.removeOne(action.transaction.id, state)),

);


//Selectors

export const getTransactionState = createFeatureSelector<TransactionState>('TransactionState');

export const selectTransactionIds = createSelector(getTransactionState, fromAdapter.selectTransactionIds);
export const selectTransactionEntities = createSelector(getTransactionState, fromAdapter.selectTransactionEntities);
export const selectAllTransactions = createSelector(getTransactionState, fromAdapter.selectAllTransactions);
export const TransactionsCount = createSelector(getTransactionState, fromAdapter.transactionsCount);
