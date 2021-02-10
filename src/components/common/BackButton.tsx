import React, { FC } from 'react';
import { IoArrowBackOutline } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const BackButton: FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <Button onClick={handleBack}>
      <IoArrowBackOutline />
    </Button>
  );
};

export default BackButton;
