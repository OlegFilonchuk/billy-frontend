import React, { FC } from 'react';
import { ImMinus, ImPlus } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../common/Button';
import { OpType } from '../../../types';
import { ROUTES } from '../../../constants';

const routesMap = {
  [OpType.income]: ROUTES.income,
  [OpType.expense]: ROUTES.expense,
};

const CreateOpPanel: FC = () => {
  const history = useHistory();

  const { t } = useTranslation();

  const handleCreateOperation = (opType: OpType) => {
    history.push(routesMap[opType]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-around p-2">
        <Button
          title={t('Create new expense')}
          className="p-8 border-8 rounded-full border-error"
          onClick={() => handleCreateOperation(OpType.expense)}
        >
          <ImMinus size={30} className="text-error" />
        </Button>

        <Button
          title="Create new income"
          className="p-8 border-8 rounded-full border-main"
          onClick={() => handleCreateOperation(OpType.income)}
        >
          <ImPlus size={30} className="text-main" />
        </Button>
      </div>
    </div>
  );
};

export default CreateOpPanel;
