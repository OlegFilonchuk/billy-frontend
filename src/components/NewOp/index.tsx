import React, {
  FC,
  useState,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import {
  BiCalendarEvent,
  FaMoneyBillAlt,
  FiPenTool,
  IoBackspaceSharp,
} from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { OperationType } from '../../types';
import { formatDate } from '../../utils/dateHelpers';
import Keyboard from './Keyboard';
import Button from '../common/Button';
import { CURRENCY } from '../../constants';
import CategoryPicker from './CategoryPicker';
import './style.css';
import Input from '../common/Input';

type Props = {
  opType: OperationType;
};

const maxLength = 9;

export enum ArithmeticOperation {
  '+' = '+',
  '-' = '-',
  '*' = '*',
  '/' = '/',
}

const NewOp: FC<Props> = ({ opType }) => {
  const { t } = useTranslation();

  const keydownHandler = (ev: KeyboardEvent<HTMLDivElement>) => {
    console.log(ev);
  };

  const [keyboardOpen, setKeyboardOpen] = useState(true);
  const [currentValue, setCurrentValue] = useState('0');
  const [savedValue, setSavedValue] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(false);
  const [operation, setOperation] = useState<ArithmeticOperation | null>(null);

  const operationHandlers: Record<
    ArithmeticOperation,
    (a: number, b: number) => number
  > = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const handleOperationClick = (op: ArithmeticOperation) => {
    if (!savedValue) {
      setSavedValue(currentValue);
    } else {
      if (!operation) return;
      setSavedValue(
        operationHandlers[operation](+savedValue, +currentValue).toString(),
      );
    }
    setCurrentValue('0');
    setOperation(op);
  };
  const handleEqualsClick = () => {
    if (!operation) return;
    setCurrentValue(
      operationHandlers[operation](+savedValue, +currentValue).toString(),
    );
    setSavedValue('');
    setOperation(null);
  };

  const handleNoteChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    ev.stopPropagation();

    setNote(ev.target.value);
  };

  const handleKeyboardConfirm = () => {
    if (currentValue === '0') {
      setError(true);
      setTimeout(() => setError(false), 1000);
      return;
    }
    setKeyboardOpen(false);
  };

  const handleOpenKeyboard = () => setKeyboardOpen(true);

  const handleInputClick = (ev: MouseEvent<HTMLInputElement>) => {
    ev.preventDefault();
    handleOpenKeyboard();
  };

  const handleBackspace = () => {
    const minLength = currentValue.startsWith('-') ? 2 : 1;
    setCurrentValue((prevState) =>
      currentValue.length === minLength
        ? '0'
        : prevState.substr(0, prevState.length - 1),
    );
  };

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length >= maxLength + 1) return;
    if (value === '') {
      setCurrentValue('0');
      return;
    }
    setCurrentValue(value);
  };

  const handleDigitClick = (value: string) => {
    if (currentValue.length >= maxLength) return;

    setCurrentValue((prevState) =>
      prevState === '0' ? value : prevState + value,
    );
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div tabIndex={-1} className="outline-none" onKeyDown={keydownHandler}>
      <div className="p-4 h-full flex flex-col items-stretch">
        <div>
          <div className="flex justify-center items-center mb-12">
            <BiCalendarEvent size={24} />

            {formatDate(new Date())}
          </div>

          <div
            className={`shadow-inner text-textLight rounded-sm p-1 flex items-center justify-between h-16 transition-all duration-300 ${
              error ? 'animate-error bg-red-400' : 'bg-main'
            }`}
          >
            <div className="flex flex-col justify-evenly items-center border-r border-textLight px-2">
              <FaMoneyBillAlt size={24} />

              <div className="text-sm text-black">{CURRENCY}</div>
            </div>

            <input
              type="number"
              onClick={handleInputClick}
              className="input text-4xl w-60 bg-transparent text-center caret-transparent outline-none"
              value={currentValue}
              onChange={handleChange}
            />

            <div>
              <Button onClick={handleBackspace}>
                <IoBackspaceSharp size={32} />
              </Button>
            </div>
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

              <Input
                fullWidth
                value={note}
                onKeyDown={(ev) => {
                  ev.stopPropagation();
                }}
                onChange={handleNoteChange}
                placeholder={t('Add some note here')}
                type="text"
                name="note"
                id="note"
                className="pl-8"
              />
            </div>
          </div>
        </div>

        <CategoryPicker open={!keyboardOpen} opType={opType} />
      </div>

      <Keyboard
        open={keyboardOpen}
        handleChange={handleDigitClick}
        handleConfirm={handleKeyboardConfirm}
        handleOperation={handleOperationClick}
        handleEquals={handleEqualsClick}
      />
    </div>
  );
};

export default NewOp;
