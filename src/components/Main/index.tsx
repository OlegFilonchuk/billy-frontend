import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CreateOpPanel from './CreateOpPanel';
import Balance from './Balance';
import { expenseCategories, weeklyExpense, weeklyIncome } from '../../mocks';
import Button from '../common/Button';
import { CURRENCY } from '../../constants';

const Main: FC = () => {
  const categories = expenseCategories;
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col flex-nowrap justify-between">
      <div className="text-center text-main">week</div>

      <div className="flex-1 grid grid-cols-mainScreen grid-rows-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="flex justify-center items-center">
              <Button className="rounded-full">
                <Icon size={36} />
              </Button>
            </div>
          );
        })}

        <div className="col-start-2 row-start-2 col-end-4 row-end-5 flex items-center justify-center p-2">
          <div className="rounded-full bg-gray-400 w-52 h-52 shadow-inner flex items-center justify-center">
            <div className="rounded-full w-32 h-32 bg-bg shadow-md flex items-center justify-center flex-col">
              <div className="text-accent">
                {`${weeklyIncome} ${t(CURRENCY)}`}
              </div>

              <div className="text-error">
                {`${weeklyExpense} ${t(CURRENCY)}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Balance />
        <CreateOpPanel />
      </div>
    </div>
  );
};

export default Main;
