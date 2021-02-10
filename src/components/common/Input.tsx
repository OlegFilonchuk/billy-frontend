import React, { FC, HTMLProps } from 'react';

type Props = HTMLProps<HTMLInputElement> & {
  fullWidth?: boolean;
};

const Input: FC<Props> = ({ className, fullWidth, ...rest }) => {
  return (
    <input
      {...rest}
      className={`bg-transparent border-b focus:border-main transition-colors caret-main h-8 p-1 ${
        fullWidth ? 'w-full' : ''
      } ${className || ''}`}
    />
  );
};

export default Input;
