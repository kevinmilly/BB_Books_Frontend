import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';



// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  removeTransaction(transaction: Transaction) {
    throw new Error('Method not implemented.');
  }

  private BASE_URL: string = "http://localhost:3036";

  constructor(private http: HttpClient) { }



  addTransaction(transactionToAdd: Transaction) {
    return this.http.post<{ message: string, transaction: Transaction }>(`${this.BASE_URL}/transactions`, transactionToAdd);

  }

  getTransactions() {
    return this.http.get<{ message: string, transactions: Transaction[] }>(`${this.BASE_URL}/transactions/`);
  }

  getTransactionsByCategory(category: string) {
    return this.http.get<{ message: string, transactions: Transaction[] }>(`${this.BASE_URL}/transactions/${category}`);
  }
  updateTransaction(transactionToUpdate: Transaction) {
    return this.http.put<{ message: string, transaction: Transaction }>(`${this.BASE_URL}/transactions/${transactionToUpdate.id}`, transactionToUpdate);
  }

  deleteTransaction(id: string) {
    return this.http.delete<{ message: string, transaction: Transaction }>(`${this.BASE_URL}/transactions/${id}}`);
  }



}