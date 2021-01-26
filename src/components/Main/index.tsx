import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CreateOpPanel from './CreateOpPanel';
import Balance from './Balance';

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full flex flex-col flex-nowrap">
      <div className="flex-1">{t('sample')}</div>

      <div>
        <Balance />
        <CreateOpPanel />
      </div>
    </div>
  );
};

export default Main;
