import React, { FC } from 'react';
import { ImMinus, ImPlus } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import { OperationType } from '../../types';

const CreateOpPanel: FC = () => {
  const history = useHistory();

  const handleCreateOperation = (opType: OperationType) => {
    history.push(`/${opType}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-around p-2">
        <Button
          className="p-8 border-8 rounded-full border-error"
          onClick={() => handleCreateOperation('expense')}
        >
          <ImMinus size={30} className="text-error" />
        </Button>

        <Button
          className="p-8 border-8 rounded-full border-main"
          onClick={() => handleCreateOperation('income')}
        >
          <ImPlus size={30} className="text-main" />
        </Button>
      </div>
    </div>
  );
};

export default CreateOpPanel;
