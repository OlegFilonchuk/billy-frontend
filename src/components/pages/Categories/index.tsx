import React, { FC, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OP_TYPE_LIST, ROUTES } from '../../../constants';
import { Category, OpType } from '../../../types';
import Button from '../../common/Button';
import Divider from '../../common/Divider';
import CategoryPicker from '../NewOp/CategoryPicker';

const Categories: FC = () => {
  const history = useHistory();
  const [active, setActive] = useState(OP_TYPE_LIST[0]);

  const handleChange = (opType: OpType) => {
    setActive(opType);
  };

  return (
    <div className="p-4 flex items-center flex-col">
      <div className="flex h-12 mt-2 mb-4">
        {OP_TYPE_LIST.map((opType, i) => (
          <Fragment key={opType}>
            {i !== 0 && <Divider />}

            <Button
              className="text-2xl"
              disabled={opType === active}
              onClick={() => handleChange(opType)}
            >
              {opType}
            </Button>
          </Fragment>
        ))}
      </div>

      <CategoryPicker
        open
        opType={active}
        onClick={(cat: Category) => {
          history.push(`${ROUTES.categories}/${cat.type}/${cat.id}`);
        }}
      />
    </div>
  );
};

export default Categories;
