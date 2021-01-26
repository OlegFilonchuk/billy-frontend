import React, { FC } from 'react';
import { BiCalendarEvent, FiPenTool } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { OperationType } from '../../types';
import { formatDate } from '../../utils/dateHelpers';
import Keyboard from './Keyboard';
import Button from '../common/Button';

type Props = {
  opType: OperationType;
};

const NewOp: FC<Props> = ({ opType }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 h-full flex flex-col items-stretch justify-between">
      <div>
        <div className="flex justify-center items-center mb-12">
          <BiCalendarEvent size={24} />

          {formatDate(new Date())}
        </div>

        <div className="shadow-inner text-textLight rounded-sm p-4 text-5xl flex items-center justify-center bg-main">
          tests
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
        <Keyboard />

        <Button fullWidth outlined className="py-6 mt-1 uppercase">
          {t('Pick a Category')}
        </Button>
      </div>
    </div>
  );
};

export default NewOp;
