import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionService } from 'src/app/transactions/services/transaction.service';
import { addTransaction, addTransactionSuccess, loadTransactions, loadTransactionsSuccess, removeTransaction, removeTransactionSuccess, updateTransaction, updateTransactionSuccess } from '../actions/transaction.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class TransactionEffects {



  constructor(private actions$: Actions, private transactionService: TransactionService) { }

  loadTransactions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadTransactions),
        mergeMap((action) => {
          return this.transactionService.getTransactions().pipe(
            map((data) => {
              console.log({ data });
              return loadTransactionsSuccess({ transactions: data.transactions })
            })
          );
        })
      );
    }
  )

  addTransaction$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addTransaction),
        mergeMap((action) => {
          return this.transactionService.addTransaction(action.transaction).pipe(
            map((data) => {
              console.log(data.message);
              return addTransactionSuccess({ transaction: data.transaction })
            })
          );
        })
      );
    }
  )

  // updateTransaction$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(updateTransaction),
  //       mergeMap((action) => {
  //         return this.transactionService.updateTransaction(action.transaction).pipe(
  //           map((data) => {
  //             console.log(data.message);
  //             return updateTransactionSuccess({ transaction: data.transaction })
  //           })
  //         );
  //       })
  //     );
  //   }
  // )

  removeTransaction$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(removeTransaction),
        mergeMap((action) => {
          return this.transactionService.deleteTransaction(action.transaction.id).pipe(
            map((data) => {
              console.log(data.message);
              return removeTransactionSuccess({ transaction: data.transaction })
            })
          );
        })
      );
    }
  )

}
