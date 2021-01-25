import React, { FC } from 'react';
import Button from '../../common/Button';

type Props = {
  onRangesToggle: () => void;
  onMenuToggle: () => void;
};

const TopPanel: FC<Props> = ({ onRangesToggle, onMenuToggle }) => {
  return (
    <div className="bg-main h-16 w-full text-bg flex flex-row flex-wrap items-center justify-between p-2 shadow-sm fixed z-50">
      <Button onClick={onRangesToggle}>ranges</Button>

      <div>top panel</div>

      <Button onClick={onMenuToggle}>menu</Button>
    </div>
  );
};

export default TopPanel;
