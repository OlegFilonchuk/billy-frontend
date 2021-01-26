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
  sign: string;
  onClick: (s: string) => void;
};

const Key: FC<KeyProps> = ({ sign, onClick }) => (
  <Button
    onClick={() => onClick(sign)}
    className="py-5 flex justify-center items-center text-3xl"
    outlined
  >
    {sign}
  </Button>
);

type KeyboardProps = {
  handleChange: (val: string) => void;
};

const Keyboard: FC<KeyboardProps> = ({ handleChange }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1">
      {keys.map((key) => (
        <Key sign={key.toString()} onClick={handleChange} key={key} />
      ))}
    </div>
  );
};

export default Keyboard;
