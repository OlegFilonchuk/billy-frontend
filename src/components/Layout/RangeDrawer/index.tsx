import React, { FC } from 'react';

type Props = {
  open: boolean;
};

const RangeDrawer: FC<Props> = ({ open }) => {
  return (
    <aside
      className={`transform top-0 left-0 w-48 bg-bg fixed h-full overflow-auto ease-in-out transition-all duration-300 z-10 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      drawer
    </aside>
  );
};

export default RangeDrawer;
