import React, { FC, useState } from 'react';
import {
  BiCalendarEvent,
  FaMoneyBillAlt,
  FiPenTool,
  IoBackspaceSharp,
} from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { OperationType } from '../../types';
import { formatDate } from '../../utils/dateHelpers';
import Keyboard from './Keyboard';
import Button from '../common/Button';
import { isNumber } from '../../utils/stringHelpers';
import { CURRENCY } from '../../constants';

type Props = {
  opType: OperationType;
};

const NewOp: FC<Props> = ({ opType }) => {
  const { t } = useTranslation();

  const [value, setValue] = useState('0');

  const handleBackspace = () => {
    setValue((prevState) =>
      value.length === 1 ? '0' : prevState.substr(0, prevState.length - 1),
    );
  };

  const handleChange = (val: string) => {
    if (value.length >= 9) return;
    if (!isNumber(val)) {
      return;
    }

    setValue((prevState) => (prevState === '0' ? val : prevState + val));
  };

  return (
    <div className="p-4 h-full flex flex-col items-stretch justify-between">
      <div>
        <div className="flex justify-center items-center mb-12">
          <BiCalendarEvent size={24} />

          {formatDate(new Date())}
        </div>

        <div className="shadow-inner text-textLight rounded-sm p-1 flex items-center justify-between bg-main h-16">
          <div className="flex flex-col justify-evenly items-center border-r border-textLight px-2">
            <FaMoneyBillAlt size={24} />

            <div className="text-sm text-black">{CURRENCY}</div>
          </div>

          <div className="text-4xl">{value}</div>

          <div>
            <Button onClick={handleBackspace}>
              <IoBackspaceSharp size={32} />
            </Button>
          </div>
        </div>

        <div className="my-6">
          <label htmlFor="note" className="pl-8 text-main text-sm">
            {t('Note')}
          </label>

          <div className="relative">
            <FiPenTool
              size={20}
              className="text-main transform -rotate-90 absolute top-1.5 left-1.5"
            />

            <input
              placeholder={t('Add some note here')}
              type="text"
              name="note"
              id="note"
              className="w-full bg-transparent pl-8 border-b focus:border-main transition-colors caret-main h-8"
            />
          </div>
        </div>
      </div>

      <div>
        <Keyboard handleChange={handleChange} />

        <Button fullWidth outlined className="py-6 mt-1 uppercase">
          {t('Pick a Category')}
        </Button>
      </div>
    </div>
  );
};

export default NewOp;
