import React, { FC } from 'react';
import { TWTransitionDuration } from '../../types';

type Props = {
  side: 'left' | 'right';
  open: boolean;
  transitionDuration?: TWTransitionDuration;
};

const Drawer: FC<Props> = ({
  side,
  open,
  children,
  transitionDuration = 300,
}) => {
  const closedClassName =
    side === 'left' ? '-translate-x-full' : 'translate-x-full';

  return (
    <aside
      className={`transform top-0 ${
        side === 'left' ? 'left-0' : 'right-0'
      } w-52 bg-bg fixed h-full overflow-auto ease-in-out transition-all duration-${transitionDuration} z-40 ${
        open ? 'translate-x-0' : closedClassName
      }`}
    >
      {children}
    </aside>
  );
};

export default Drawer;
