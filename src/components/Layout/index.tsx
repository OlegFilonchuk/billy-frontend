import React, { FC, useState } from 'react';
import TopPanel from './TopPanel';
import Drawer from '../common/Drawer';
import Backdrop from '../common/Backdrop';

const Layout: FC = ({ children }) => {
  const [rangesOpen, setRangesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleRangesOpen = () => {
    if (menuOpen) {
      toggleMenuOpen();
    }
    setRangesOpen((prevState) => !prevState);
  };
  const toggleMenuOpen = () => {
    if (rangesOpen) {
      toggleRangesOpen();
    }
    setMenuOpen((prevState) => !prevState);
  };

  const closeRanges = () => setRangesOpen(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <TopPanel
        onRangesToggle={toggleRangesOpen}
        onMenuToggle={toggleMenuOpen}
      />
      <div className="h-16" />

      <Drawer open={rangesOpen} side="left">
        range
      </Drawer>

      <Drawer side="right" open={menuOpen}>
        menu
      </Drawer>

      {children}
      <Backdrop
        open={rangesOpen || menuOpen}
        onClick={() => {
          closeRanges();
          closeMenu();
        }}
      />
    </div>
  );
};

export default Layout;
