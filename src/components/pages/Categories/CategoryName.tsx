import React, { FC, useRef, useState, ChangeEvent } from 'react';
import { Category } from '../../../types';

type Props = {
  name: Category['name'];
};

const CategoryName: FC<Props> = ({ name: initialName }) => {
  const ref = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(initialName);

  const handleNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  return (
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
  );
};

export default CategoryName;
