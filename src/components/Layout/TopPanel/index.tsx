import React, { FC } from 'react';

type Props = {
  onRangesToggle: () => void;
  onMenuToggle: () => void;
};

const TopPanel: FC<Props> = ({ onRangesToggle, onMenuToggle }) => {
  return (
    <div className="bg-main h-16 w-full text-bg flex flex-row flex-wrap items-center justify-between p-2 shadow-sm fixed z-50">
      <button type="button" onClick={onRangesToggle}>
        ranges
      </button>
      top panel
      <button type="button" onClick={onMenuToggle}>
        menu
      </button>
    </div>
  );
};

export default TopPanel;
