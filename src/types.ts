export type OperationType = 'income' | 'expense';

export type TWTransitionDuration =
  | 75
  | 100
  | 150
  | 200
  | 300
  | 500
  | 700
  | 1000;

type DateString = string;
type Currency = string;
type Id = string;
type Error = {
  status: string;
  title: string;
  detail: string | string[];
  // [key: string]: string[];
};

/**
 * endpoint '/login/'
 * method: 'POST'
 */
export type LoginRequestData = {
  username: string;
  password: string;
};

export type LoginResponseData = {
  token: string;
};

export type LoginResponseError = Error;

/**
 * endpoint '/register/'
 * method: 'POST'
 */
export type RegisterRequestData = {
  username?: string;
  password: string;
  email: string;
};

export type RegisterResponseData = {
  token: string;
};

/**
 * endpoint: '/reset-password/'
 * method: 'POST'
 */
export type ResetPasswordData = {
  email: string;
};

/**
 * endpoint: '/profile/'
 * method: 'GET', 'PATCH'
 */
export type ProfileData = {
  username: string;
  email: string;
  id: Id;
  createDate: DateString;
};

/**
 * endpoints: '/operations/categories/incomes',
 *            '/operations/categories/expenses',
 * method: 'GET', 'PATCH', 'DELETE', 'POST'
 */

export type Category = {
  id: Id;
  name: string;
  icon: any;
  type: OperationType;
  createDate: DateString;
  updateDate: DateString;
};

/**
 * endpoint: '/operations/'
 * method: 'GET', 'POST'
 * filtration!
 * include Balance // return updated balance arter operation post
 */
/**
 * endpoint: '/operations/{id}',
 * method: 'GET', 'PATCH', 'PUT', 'DELETE'

 */

export type Operation = {
  id: Id;
  type: OperationType;
  value: number;
  category: Id;
  date: DateString;
  createDate: DateString;
  updateDate: DateString;
  isSystem?: true;
  note?: string;
};

export type OperationResponse = {
  offset: number;
  limit: number;
  results: Operation[];
};

/**
 * endpoint: '/balance/',
 * method: 'GET',
 * params: from date, to date
 *
 */
export type Balance = {
  incomes: number;
  expenses: number;
  total: number;
};

/**
 * endpoint: '/accounts/',
 * method: 'GET', 'PATCH', 'DELETE'
 */
export type Account = {
  id: Id;
  name: string;
  value: number;
  currency: Currency;
  createDate: DateString;
  updateDate: DateString;
};

/**
 * endpoint: '/debts/',
 * method: 'GET', 'PATCH', 'PUT'
 */

export type Debt = {
  name: string;
  id: Id;
  value: number;
  createDate: DateString;
  updateDate: DateString;
  note?: string;
};
