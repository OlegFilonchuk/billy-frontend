import React, { FC, useState } from 'react';
import {
  HiOutlineCurrencyDollar,
  IoSettingsOutline,
  IoWalletOutline,
  RiBookletLine,
} from 'react-icons/all';
import TopPanel from './TopPanel';
import Drawer from '../common/Drawer';
import Backdrop from '../common/Backdrop';
import { TRANSITION_DURATION } from '../../constats';
import TopPanelPlaceholder from '../common/TopPanelPlaceholder';
import Button from '../common/Button';

const Layout: FC = ({ children }) => {
  const [rangesOpen, setRangesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const transitionDuration = TRANSITION_DURATION;

  const toggleRangesOpen = () => {
    if (blocked) return;
    if (menuOpen) {
      toggleMenuOpen();
    }
    setBlocked(true);
    setRangesOpen((prevState) => !prevState);
    setTimeout(() => setBlocked(false), transitionDuration);
  };

  const toggleMenuOpen = () => {
    if (blocked) return;
    if (rangesOpen) {
      toggleRangesOpen();
    }
    setBlocked(true);
    setMenuOpen((prevState) => !prevState);
    setTimeout(() => setBlocked(false), transitionDuration);
  };

  const closeRanges = () => setRangesOpen(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <TopPanel
        onRangesToggle={toggleRangesOpen}
        onMenuToggle={toggleMenuOpen}
      />
      <TopPanelPlaceholder />

      <Drawer open={rangesOpen} side="left">
        range
      </Drawer>

      <Drawer side="right" open={menuOpen}>
        <div className="flex flex-col items-center justify-start">
          <Button>
            <RiBookletLine />
          </Button>

          <Button>
            <IoWalletOutline />
          </Button>

          <Button>
            <HiOutlineCurrencyDollar />
          </Button>

          <Button>
            <IoSettingsOutline />
          </Button>
        </div>
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
