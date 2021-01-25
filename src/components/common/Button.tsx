import React, { FC, HTMLProps } from 'react';

type Props = HTMLProps<HTMLButtonElement> & {
  column?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: FC<Props> = ({
  type = 'button',
  column = false,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
      className={`p-2 rounded-sm inline-flex justify-center items-center ${
        column && 'flex-col'
      } ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
