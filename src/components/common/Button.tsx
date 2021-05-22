import React, { FC, HTMLProps } from 'react';
import { ButtonComponentProps } from '../../types';

export type ButtonProps = HTMLProps<HTMLButtonElement> & ButtonComponentProps;

const Button: FC<ButtonProps> = ({
  type = 'button',
  column = false,
  outlined = false,
  className,
  fullWidth,
  children,
  ...rest
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
      className={`transition duration-150 hover:shadow-lg focus:shadow-lg focus:ring ring-accent disabled:opacity-50 p-2 rounded inline-flex justify-center items-center ${
        column ? 'flex-col' : ''
      } ${fullWidth ? 'w-full' : ''} ${outlined ? 'border border-main' : ''} ${
        className || ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
