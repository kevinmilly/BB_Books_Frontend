import { Category } from "./category.model";

export interface Transaction {
    id: string;
    transactionAmount: number;
    category: Category;
    transactionDate: string;
    monthlyRecurrence: number;
    description: string;
}