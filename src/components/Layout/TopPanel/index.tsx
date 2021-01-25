import React, { FC } from 'react';
import { BiMenuAltLeft, HiDotsVertical } from 'react-icons/all';
import Button from '../../common/Button';
import logo from './billy_logo.png';

type Props = {
  onRangesToggle: () => void;
  onMenuToggle: () => void;
};

const TopPanel: FC<Props> = ({ onRangesToggle, onMenuToggle }) => {
  return (
    <div className="bg-main h-16 w-full text-bg flex flex-row flex-nowrap items-center justify-between p-2 shadow-sm fixed z-50">
      <Button onClick={onRangesToggle}>
        <BiMenuAltLeft size={24} />
      </Button>

      <div className="flex-1 h-full">
        <img src={logo} alt="Billy" className="h-6 object-contain" />
      </div>

      <Button onClick={onMenuToggle}>
        <HiDotsVertical size={24} />
      </Button>
    </div>
  );
};

export default TopPanel;
