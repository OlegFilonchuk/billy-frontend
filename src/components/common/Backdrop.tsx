import React, { FC, useEffect, useState } from 'react';
import { TWTransitionDuration } from '../../types';
import { TRANSITION_DURATION } from '../../constants';

type Props = {
  open: boolean;
  transitionDuration?: TWTransitionDuration;
  onClick: () => void;
};

const Backdrop: FC<Props> = ({
  open,
  transitionDuration = TRANSITION_DURATION,
  onClick,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, transitionDuration);
    }
  }, [open, transitionDuration]);

  return (
    <div
      role="presentation"
      className={`absolute left-0 right-0 bottom-0 bg-black transition-opacity ease-in-out duration-300 z-10 ${
        open ? 'opacity-50' : 'opacity-0'
      } ${show ? 'top-0' : 'top-full'}`}
      onClick={onClick}
    />
  );
};

export default Backdrop;
