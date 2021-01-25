import React, { FC } from 'react';
import { TWTransitionDuration } from '../../types';
import { TRANSITION_DURATION } from '../../constats';
import TopPanelPlaceholder from './TopPanelPlaceholder';

type Props = {
  side: 'left' | 'right';
  open: boolean;
  transitionDuration?: TWTransitionDuration;
};

const Drawer: FC<Props> = ({
  side,
  open,
  children,
  transitionDuration = TRANSITION_DURATION,
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
      <TopPanelPlaceholder />

      <div className="p-2">{children}</div>
    </aside>
  );
};

export default Drawer;
