import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
  open: boolean;
  handleChange: (val: string) => void;
  handleConfirm: () => void;
};

const Keyboard: FC<KeyboardProps> = ({ open, handleChange, handleConfirm }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full transform fixed transition-all bottom-0 z-10 p-2 ${
        !open ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-1">
        {keys.map((key) => (
          <Key sign={key.toString()} onClick={handleChange} key={key} />
        ))}
      </div>

      <Button
        onClick={handleConfirm}
        fullWidth
        outlined
        className="py-6 mt-1 uppercase"
      >
        {t('Pick a Category')}
      </Button>
    </div>
  );
};

export default Keyboard;
