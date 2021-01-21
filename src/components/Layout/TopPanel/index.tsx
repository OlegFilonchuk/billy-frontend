import React, { FC } from 'react';

type Props = {
  toggleDrawerOpen: () => void;
};

const TopPanel: FC<Props> = ({ toggleDrawerOpen }) => {
  return (
    <div className="bg-main h-16 w-full text-bg flex flex-row flex-wrap items-center p-2 shadow-sm fixed z-50">
      <button type="button" onClick={toggleDrawerOpen}>
        toggle
      </button>
      top panel
    </div>
  );
};

export default TopPanel;
