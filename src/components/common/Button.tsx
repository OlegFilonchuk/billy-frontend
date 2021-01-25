import React, { FC, HTMLProps } from 'react';

type Props = HTMLProps<HTMLButtonElement> & {
  column?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
};

const Button: FC<Props> = ({
  type = 'button',
  column = false,
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
      className={`transition-colors duration-150 focus:ring ring-accent p-2 rounded-sm inline-flex justify-center items-center ${
        column ? 'flex-col' : ''
      } ${fullWidth ? 'w-full' : ''} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
