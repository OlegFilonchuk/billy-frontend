import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CreateOpPanel from './CreateOpPanel';

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bg h-full">
      {t('sample')}
      <CreateOpPanel />
    </div>
  );
};

export default Main;
