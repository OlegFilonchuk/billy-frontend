import {
  expenseCategories,
  incomeCategories,
  positiveBalance,
  weeklyExpense,
  weeklyIncome,
} from '../mocks';

export const fetchExpenseCategories = async () => expenseCategories;

export const fetchIncomeCategories = async () => incomeCategories;

export const fetchWeeklyIncome = async () => weeklyIncome;

export const fetchWeeklyExpense = async () => weeklyExpense;

export const fetchBalance = async () => positiveBalance;
