import React, { FC, useState } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoSettingsOutline, IoWalletOutline } from 'react-icons/io5';
import { RiBookletLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import TopPanel from './TopPanel/TopPanel';
import Drawer from '../common/Drawer/Drawer';
import Backdrop from '../common/Backdrop/Backdrop';
import { ROUTES, TRANSITION_DURATION } from '../../constants';
import Button from '../common/Button';
import ButtonLink from '../common/ButtonLink';

type Props = {
  withBack?: boolean;
};

const Layout: FC<Props> = ({ withBack, children }) => {
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
        withBack={withBack}
      />

      <Drawer open={rangesOpen} side="left">
        <div className="flex flex-col items-center justify-start">
          <Button outlined className="border-accent mb-2" fullWidth>
            {t('Day')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            {t('Week')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            {t('Month')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            {t('Year')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            {t('All')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            {t('Date Range')}
          </Button>

          <Button outlined className="border-accent mb-2" fullWidth>
            <BiCalendarEvent size={24} className="text-accent" />
            {t('Pick Date')}
          </Button>
        </div>
      </Drawer>

      <Drawer side="right" open={menuOpen}>
        <IconContext.Provider value={{ size: '32', className: 'text-accent' }}>
          <div className="flex flex-col items-center justify-start">
            <ButtonLink
              to={ROUTES.categories}
              column
              fullWidth
              onClick={closeMenu}
            >
              <RiBookletLine />
              <span className="py-2">{t('Categories')}</span>
            </ButtonLink>

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

      <main className="h-full pt-16 bg-bg">{children}</main>

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
