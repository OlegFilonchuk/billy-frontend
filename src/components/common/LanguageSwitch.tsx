import React, { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import Divider from './Divider';

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex">
      {['ru', 'en'].map((
        lng,
        i, // TODO: figure out with i18n language array
      ) => (
        <Fragment key={lng}>
          {i !== 0 && <Divider />}

          <Button
            onClick={() => handleChange(lng)}
            disabled={lng === i18n.language}
          >
            {lng}
          </Button>
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitch;
