import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/numbersHelpers';
import { positiveBalance as balance } from '../../../mocks';
import { CURRENCY } from '../../../constants';

const Balance = () => {
  const isPositive = balance > 0;

  const { t } = useTranslation();

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
