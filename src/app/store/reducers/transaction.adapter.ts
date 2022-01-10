import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from 'src/app/transactions/models/transaction.model';


export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const {
    selectIds: selectTransactionIds,
    selectEntities: selectTransactionEntities,
    selectAll: selectAllTransactions,
    selectTotal: transactionsCount
} = adapter.getSelectors(); 