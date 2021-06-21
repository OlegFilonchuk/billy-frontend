import { positiveBalance, weeklyExpense, weeklyIncome } from '../mocks';
import { Category } from '../types';

const BASE_URL = 'http://localhost:3001';

export const fetchExpenseCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${BASE_URL}/categories/expense/`);
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const fetchIncomeCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${BASE_URL}/categories/income/`);
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const fetchWeeklyIncome = async () => weeklyIncome;

export const fetchWeeklyExpense = async () => weeklyExpense;

export const fetchBalance = async () => positiveBalance;
