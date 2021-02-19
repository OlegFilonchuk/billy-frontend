import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoriesMap } from '../../../constants';
import { OpType } from '../../../types';

const CategoryPage: FC = () => {
  const { id, type } = useParams<{ id: string; type: OpType }>();
  const categories = categoriesMap[type];
  const category = categories.find((cat) => cat.id === id);

  const ref = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(category?.name);

  const handleNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="shadow-inner text-textLight rounded-sm p-1 flex items-center justify-center h-16 transition-all duration-300 bg-main">
        <input
          ref={ref}
          // placeholder
          // label
          // onFocus={() => ref.current?.select()}
          value={name}
          onChange={handleNameChange}
          className="input text-4xl w-60 bg-transparent text-center caret-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default CategoryPage;
