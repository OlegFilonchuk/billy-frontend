import React, { FC } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import Button from '../../common/Button';
import logo from '../../../assets/logo_white.png';
import { ROUTES } from '../../../constants';
import BackButton from '../../common/BackButton';

type Props = {
  onRangesToggle: () => void;
  onMenuToggle: () => void;
  withBack?: boolean;
};

const TopPanel: FC<Props> = ({
  onRangesToggle,
  onMenuToggle,
  withBack = true,
}) => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <div className="bg-main h-16 w-full text-textLight flex flex-row flex-nowrap items-center justify-between p-2 shadow-sm fixed z-50">
      <IconContext.Provider value={{ size: '24' }}>
        {withBack && <BackButton />}

        {location.pathname === ROUTES.root && (
          <>
            <Button onClick={onRangesToggle}>
              <BiMenuAltLeft />
            </Button>

            <div className="flex-1 h-full">
              <img src={logo} alt="Billy" className="h-6 object-contain" />
              <div className="text-sm px-1">{t('All Accounts')}</div>
            </div>

            <Button onClick={onMenuToggle}>
              <HiDotsVertical />
            </Button>
          </>
        )}

        {(location.pathname === ROUTES.expense ||
          location.pathname === ROUTES.income) && (
          <>
            <div className="flex-1 h-full flex items-center px-4">
              {t(
                location.pathname === ROUTES.expense
                  ? 'New Expense'
                  : 'New Income',
              )}
            </div>

            <div />
          </>
        )}
      </IconContext.Provider>
    </div>
  );
};

export default TopPanel;
