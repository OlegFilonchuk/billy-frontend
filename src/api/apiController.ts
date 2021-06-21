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

export const fetchWeeklyIncome = async (): Promise<number> => {
  try {
    const res = await fetch(`${BASE_URL}/weeklyIncome/`);
    const data = await res.json();
    return data.value;
  } catch (e) {
    return e;
  }
};

export const fetchWeeklyExpense = async (): Promise<number> => {
  try {
    const res = await fetch(`${BASE_URL}/weeklyExpense/`);
    const data = await res.json();
    return data.value;
  } catch (e) {
    return e;
  }
};

export const fetchBalance = async (): Promise<number> => {
  try {
    const res = await fetch(`${BASE_URL}/balance/`);
    const data = await res.json();
    return data.value;
  } catch (e) {
    return e;
  }
};
