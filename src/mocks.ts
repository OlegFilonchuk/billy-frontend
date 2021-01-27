import { Category } from './types';

export const positiveBalance = 12_345;

export const incomeCategories: Category[] = [
  {
    id: 'randomId1',
    name: 'Salary',
    type: 'income',
    updateDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId2',
    name: 'Part-time job',
    type: 'income',
    updateDate:
      'Wed Jan 26 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 24 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId3',
    name: 'Alms',
    type: 'income',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
];

export const expenseCategories: Category[] = [
  {
    id: 'randomId4',
    name: 'Auto',
    type: 'expense',
    updateDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId5',
    name: 'Health',
    type: 'expense',
    updateDate:
      'Wed Jan 26 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 24 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId6',
    name: 'Alms',
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
];
