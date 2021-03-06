import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonComponentProps } from '../../types';

export type ButtonLinkProps = LinkProps & ButtonComponentProps;

const ButtonLink: FC<ButtonLinkProps> = ({
  fullWidth,
  outlined,
  column,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`transition duration-150 hover:shadow-lg focus:shadow-lg focus:ring ring-accent disabled:opacity-50 p-2 rounded inline-flex justify-center items-center ${
        column ? 'flex-col' : ''
      } ${fullWidth ? 'w-full' : ''} ${outlined ? 'border border-main' : ''} ${
        className || ''
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
