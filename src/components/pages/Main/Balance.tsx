import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useQuery } from 'react-query';
import { formatNumber } from '../../../utils/numbersHelpers';
import { CURRENCY, QUERY_KEYS } from '../../../constants';
// import { fetchBalance } from '../../../api/apiController';

const Balance = () => {
  const { t } = useTranslation();
  // const { data: balance } = useQuery(QUERY_KEYS.balance, fetchBalance);

  const balance = 123;

  if (!balance) return null;

  const isPositive = balance > 0;

  return (
    <div
      className={`shadow-inner text-textLight rounded-sm p-2 mx-12 text-lg flex items-center justify-center ${
        isPositive ? 'bg-main' : 'bg-error'
      }`}
    >
      {t('Balance')}

      <span className="font-bold">&nbsp;{formatNumber(balance)}&nbsp;</span>

      {t(CURRENCY)}
    </div>
  );
};

export default Balance;
