import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

const BackButton: FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const { t } = useTranslation();

  return (
    <Button onClick={handleBack} title={t('Go back')}>
      <IoArrowBackOutline />
    </Button>
  );
};

export default BackButton;
