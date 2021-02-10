import React, { FC, useEffect, useState } from 'react';
import { RiAddCircleLine } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { OpType, TWTransitionDuration } from '../../../types';
import { expenseCategories, incomeCategories } from '../../../mocks';
import Button from '../../common/Button';

const categoriesMap = {
  [OpType.income]: incomeCategories,
  [OpType.expense]: expenseCategories,
};

type Props = {
  open: boolean;
  opType: OpType;
};

const CategoryPicker: FC<Props> = ({ open, opType }) => {
  const transitionDuration: TWTransitionDuration = 150;
  const categories = categoriesMap[opType];

  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, transitionDuration);
    }
  }, [open]);

  return (
    <div
      className={`transform transition-opacity h-52 duration-${transitionDuration} ${
        open ? 'opacity-100' : 'opacity-0'
      } ${show ? '' : 'invisible'}`}
    >
      <div className="grid grid-cols-3 gap-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Button key={cat.id} outlined column className="shadow-md">
              <Icon size={30} />
              {cat.name}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-1 mt-4">
        <Button column className="text-gray-500">
          <RiAddCircleLine size={30} />

          {t('Add')}
        </Button>
      </div>
    </div>
  );
};

export default CategoryPicker;
