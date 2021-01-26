import React, { FC } from 'react';
import Button from '../common/Button';

const keys = [
  '1',
  '2',
  '3',
  '+',
  '4',
  '5',
  '6',
  '-',
  '7',
  '8',
  '9',
  '×',
  '.',
  '0',
  '=',
  '÷',
];

type KeyProps = {
  value: string;
};

const Key: FC<KeyProps> = ({ value }) => (
  <Button className="py-5 flex justify-center items-center text-3xl" outlined>
    {value}
  </Button>
);

const Keyboard: FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1">
      {keys.map((key) => (
        <Key value={key.toString()} key={key} />
      ))}
    </div>
  );
};

export default Keyboard;
