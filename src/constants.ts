import { OpType } from './types';
import {
  fetchIncomeCategories,
  fetchExpenseCategories,
} from './api/apiController';

export const TRANSITION_DURATION = 300;

export const CURRENCY = 'UAH';

export const ROUTES = {
  root: '/',
  income: '/income',
  expense: '/expense',
  login: '/login',
  signup: '/signup',
  categories: '/categories',
  category: '/category',
};

export const QUERY_KEYS = {
  categories: 'categories',
  balance: 'balance',
  weeklyIncome: 'weeklyIncome',
  weeklyExpense: 'weeklyExpense',
};

export const OP_TYPE_LIST = Object.keys(OpType).map((k) => OpType[k as OpType]);

export const categoriesMap = {
  [OpType.income]: fetchIncomeCategories,
  [OpType.expense]: fetchExpenseCategories,
};
