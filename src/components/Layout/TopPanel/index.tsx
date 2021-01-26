import React, { FC } from 'react';
import { BiMenuAltLeft, FiArrowLeft, HiDotsVertical } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import Button from '../../common/Button';
import logo from './billy_logo.png';
import { ROUTES } from '../../../constants';

type Props = {
  onRangesToggle: () => void;
  onMenuToggle: () => void;
};

const TopPanel: FC<Props> = ({ onRangesToggle, onMenuToggle }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="bg-main h-16 w-full text-textLight flex flex-row flex-nowrap items-center justify-between p-2 shadow-sm fixed z-50">
      <IconContext.Provider value={{ size: '24' }}>
        {location.pathname === ROUTES.root && (
          <>
            <Button onClick={onRangesToggle}>
              <BiMenuAltLeft />
            </Button>

            <div className="flex-1 h-full">
              <img src={logo} alt="Billy" className="h-6 object-contain" />
            </div>

            <Button onClick={onMenuToggle}>
              <HiDotsVertical />
            </Button>
          </>
        )}

        {(location.pathname === ROUTES.expense ||
          location.pathname === ROUTES.income) && (
          <>
            <Button onClick={handleBack}>
              <FiArrowLeft />
            </Button>

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
