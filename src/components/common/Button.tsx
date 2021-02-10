import React, { FC, HTMLProps } from 'react';

type Props = HTMLProps<HTMLButtonElement> & {
  column?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  outlined?: boolean;
};

const Button: FC<Props> = ({
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
      className={`transition-colors duration-150 hover:shadow-lg focus:shadow-lg focus:ring ring-accent disabled:opacity-50 transition-opacity p-2 rounded inline-flex justify-center items-center ${
        // NOTE: is vscode wrong here?
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
