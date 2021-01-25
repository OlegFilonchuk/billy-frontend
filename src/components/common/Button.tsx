import React, { FC } from 'react';

type Props = {
  column?: boolean;
  type?: 'button' | 'submit' | 'reset';
  [p: string]: any;
};

const Button: FC<Props> = ({
  type = 'button',
  column = false,
  children,
  ...rest
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
      className={`p-2 rounded-sm flex justify-center items-center ${
        column && 'flex-col'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
