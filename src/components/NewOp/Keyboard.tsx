import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';
import { ArithmeticOperation } from './index';

enum KeyType {
  Digit = 'Digit',
  Operation = 'Operation',
  Equals = 'Equals',
  Dot = 'Dot',
}

const keys: { value: string; type: KeyType }[] = [
  { value: '1', type: KeyType.Digit },
  { value: '2', type: KeyType.Digit },
  { value: '3', type: KeyType.Digit },
  { value: '+', type: KeyType.Operation },
  { value: '4', type: KeyType.Digit },
  { value: '5', type: KeyType.Digit },
  { value: '6', type: KeyType.Digit },
  { value: '-', type: KeyType.Operation },
  { value: '7', type: KeyType.Digit },
  { value: '8', type: KeyType.Digit },
  { value: '9', type: KeyType.Digit },
  { value: '*', type: KeyType.Operation },
  { value: '.', type: KeyType.Dot },
  { value: '0', type: KeyType.Digit },
  { value: '=', type: KeyType.Equals },
  { value: '/', type: KeyType.Operation },
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
  handleOperation: (op: ArithmeticOperation) => void;
  handleEquals: () => void;
};

const Keyboard: FC<KeyboardProps> = ({
  open,
  handleChange,
  handleConfirm,
  handleOperation,
  handleEquals,
}) => {
  const { t } = useTranslation();

  const handlersMap: Record<KeyType, any> = {
    [KeyType.Digit]: handleChange,
    [KeyType.Operation]: handleOperation,
    [KeyType.Equals]: handleEquals,
    [KeyType.Dot]: () => {
      console.log('dot');
    },
  };

  return (
    <div
      className={`w-full transform fixed transition-all bottom-0 z-10 p-2 ${
        !open ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-1">
        {keys.map(({ value, type }) => (
          <Key sign={value} onClick={handlersMap[type]} key={value} />
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
