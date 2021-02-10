import { OpType } from './types';

export const TRANSITION_DURATION = 300;

export const CURRENCY = 'HRN';

export const ROUTES = {
  root: '/',
  income: '/income',
  expense: '/expense',
  login: '/login',
  signup: '/signup',
  categories: '/categories',
};

export const OP_TYPE_LIST = Object.keys(OpType).map((k) => OpType[k as OpType]);
