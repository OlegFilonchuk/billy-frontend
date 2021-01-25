import React, { FC, useState } from 'react';
import {
  BiCalendarEvent,
  HiOutlineCurrencyDollar,
  IoSettingsOutline,
  IoWalletOutline,
  RiBookletLine,
} from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import TopPanel from './TopPanel';
import Drawer from '../common/Drawer';
import Backdrop from '../common/Backdrop';
import { TRANSITION_DURATION } from '../../constants';
import Button from '../common/Button';

const Layout: FC = ({ children }) => {
  const [rangesOpen, setRangesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const transitionDuration = TRANSITION_DURATION;

  const { t } = useTranslation();

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
    <div className="h-1 min-h-screen">
      <TopPanel
        onRangesToggle={toggleRangesOpen}
        onMenuToggle={toggleMenuOpen}
      />

      <Drawer open={rangesOpen} side="left">
        <div className="flex flex-col items-center justify-start">
          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('Day')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('Week')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('Month')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('Year')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('All')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            {t('Date Range')}
          </Button>

          <Button className="border-2 rounded-md border-accent mb-2" fullWidth>
            <BiCalendarEvent size={24} className="text-accent" />
            {t('Pick Date')}
          </Button>
        </div>
      </Drawer>

      <Drawer side="right" open={menuOpen}>
        <IconContext.Provider value={{ size: '32', className: 'text-accent' }}>
          <div className="flex flex-col items-center justify-start">
            <Button column fullWidth>
              <RiBookletLine />
              <span className="py-2">{t('Categories')}</span>
            </Button>

            <Button column fullWidth>
              <IoWalletOutline />
              <span className="py-2">{t('Accounts')}</span>
            </Button>

            <Button column fullWidth>
              <HiOutlineCurrencyDollar />
              <span className="py-2">{t('Currencies')}</span>
            </Button>

            <Button column fullWidth>
              <IoSettingsOutline />
              <span className="py-2">{t('Settings')}</span>
            </Button>
          </div>
        </IconContext.Provider>
      </Drawer>

      <main className="h-full pt-16">{children}</main>

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
