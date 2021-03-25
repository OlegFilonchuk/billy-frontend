import React, { FC, useEffect, useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { OpType, TWTransitionDuration } from '../../../types';
import Button from '../../common/Button';
import { categoriesMap, QUERY_KEYS } from '../../../constants';

type Props = {
  open: boolean;
  opType: OpType;
  onClick: (...args: any) => any;
};

const CategoryPicker: FC<Props> = ({ open, opType, onClick }) => {
  const transitionDuration: TWTransitionDuration = 150;

  const { data: categories } = useQuery(
    [QUERY_KEYS.categories, opType],
    categoriesMap[opType],
  );

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
        {categories?.map((cat) => {
          const Icon = cat.icon;
          return (
            <Button
              key={cat.id}
              outlined
              column
              className="shadow-md"
              onClick={() => onClick(cat)}
            >
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
