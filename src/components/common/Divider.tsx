import React, { FC } from 'react';

type Props = {
  horizontal?: boolean;
  color?: 'dark' | 'light';
};

const Divider: FC<Props> = ({ horizontal, color = 'dark' }) => {
  return (
    <div
      className={`${horizontal ? 'h-px w-full' : 'w-px h-full'} ${
        color === 'dark' ? 'bg-black' : 'bg-main'
      }`}
    />
  );
};

export default Divider;
