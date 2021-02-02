import {
  AiOutlinePhone,
  BiTaxi,
  BiTrain,
  BsFillHouseFill,
  FaCarSide,
  FaCat,
  FaCocktail,
  GiMedicalThermometer,
  GiMoneyStack,
  GiPayMoney,
  GiPresent,
  GiSoap,
  IoBasketballOutline,
  IoFastFoodOutline,
  IoRestaurantOutline,
  RiCoinsFill,
} from 'react-icons/all';
import { Category } from './types';

export const positiveBalance = 12_345;

export const weeklyIncome = 1456;

export const weeklyExpense = 455;

export const incomeCategories: Category[] = [
  {
    id: 'randomId1',
    name: 'Salary',
    icon: RiCoinsFill,
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
    icon: GiMoneyStack,
    updateDate:
      'Wed Jan 26 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 24 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId3',
    name: 'Alms',
    icon: GiPayMoney,
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
    name: 'Car',
    icon: FaCarSide,
    type: 'expense',
    updateDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 27 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId5',
    name: 'Health',
    icon: GiMedicalThermometer,
    type: 'expense',
    updateDate:
      'Wed Jan 26 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 24 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId6',
    name: 'Alms',
    icon: GiPayMoney,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId7',
    name: 'Transport',
    icon: BiTrain,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId8',
    name: 'Restaurants',
    icon: IoRestaurantOutline,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId9',
    name: 'Food',
    icon: IoFastFoodOutline,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId10',
    name: 'House',
    icon: BsFillHouseFill,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId11',
    name: 'Sport',
    icon: IoBasketballOutline,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId12',
    name: 'Taxi',
    icon: BiTaxi,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId13',
    name: 'Pets',
    icon: FaCat,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId14',
    name: 'Bars',
    icon: FaCocktail,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId15',
    name: 'Connection',
    icon: AiOutlinePhone,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId16',
    name: 'Hygiene',
    icon: GiSoap,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
  {
    id: 'randomId17',
    name: 'Presents',
    icon: GiPresent,
    type: 'expense',
    updateDate:
      'Wed Jan 13 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
    createDate:
      'Wed Jan 11 2021 22:13:00 GMT+0200 (Eastern European Standard Time)',
  },
];
