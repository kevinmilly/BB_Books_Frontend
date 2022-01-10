import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Transaction } from 'src/app/transactions/models/transaction.model';

export const loadTransactionsSuccess = createAction(
  '[Transaction Effect] Load Transactions Success'
);

export const loadTransactionsFailure = createAction(
  '[Transaction Effect] Load Transactions Failure'
);

export const loadTransactions = createAction(
  '[Transaction Component] Load Transactions'
);

export const addTransactionSuccess = createAction(
  '[Transaction Effect] Add Transaction Success',
  props<{ transaction: Transaction }>()
);

export const addTransactionFailure = createAction(
  '[Transaction Effect] Add Transaction Failure',
  props<{ error: any }>()
);

export const addTransaction = createAction(
  '[Transaction Component] Add Transaction',
  props<{ transaction: Transaction }>()
);

export const removeTransactionSuccess = createAction(
  '[Transaction Effect] Remove Transaction Success',
  props<{ transaction: Transaction }>()
);

export const removeTransactionFailure = createAction(
  '[Transaction Effect] Remove Transaction Failure',
  props<{ error: any }>()
);

export const removeTransaction = createAction(
  '[Transaction Component] Remove Transaction',
  props<{ transaction: Transaction }>()
);

export const updateTransaction = createAction(
  '[Transaction Component] Update Transaction',
  props<{ transaction: Transaction }>()
);

export const updateTransactionSuccess = createAction(
  '[Transaction Component] Update Transaction Success',
  props<{ transaction: Update<Transaction> }>()
);

export const updateTransactionFailure = createAction(
  '[Transaction Component] Update Transaction Failure',
  props<{ error: any }>()
);

