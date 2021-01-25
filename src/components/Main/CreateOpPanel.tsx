import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImMinus, ImPlus } from 'react-icons/all';
import { positiveBalance as balance } from '../../mocks';
import { CURRENCY } from '../../constants';
import Button from '../common/Button';

const CreateOpPanel: FC = () => {
  const isPositive = balance > 0;

  const { t } = useTranslation();

  return (
    <div className="p-4">
      <div
        className={`shadow-inner text-textLight h-12 rounded-sm p-2 mx-12 text-lg flex items-center justify-center ${
          isPositive ? 'bg-main' : 'bg-error'
        }`}
      >
        {t('Balance')}

        {` ${balance} `}

        {t(CURRENCY)}
      </div>

      <div className="flex justify-around p-2">
        <Button className="p-8 border-8 rounded-full border-error">
          <ImMinus size={30} className="text-error" />
        </Button>

        <Button className="p-8 border-8 rounded-full border-main">
          <ImPlus size={30} className="text-main" />
        </Button>
      </div>
    </div>
  );
};

export default CreateOpPanel;
