import React, { FC } from 'react';

export type DividerProps = {
  horizontal?: boolean;
  color?: 'dark' | 'light';
};

const Divider: FC<DividerProps> = ({ horizontal, color = 'dark' }) => {
  return (
    <div
      className={`${horizontal ? 'h-px w-full' : 'w-px h-full'} ${
        color === 'dark' ? 'bg-black' : 'bg-main'
      }`}
    />
  );
};

export default Divider;
