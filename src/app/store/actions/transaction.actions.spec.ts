import * as fromTransaction from './transaction.actions';

describe('loadTransactions', () => {
  it('should return an action', () => {
    expect(fromTransaction.loadTransactions().type).toBe('[Transaction] Load Transactions');
  });
});
