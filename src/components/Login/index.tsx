import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/all';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_green.png';
import { ROUTES } from '../../constants';
import Button from '../common/Button';
import Input from '../common/Input';
import LanguageSwitch from '../common/LanguageSwitch';

const Login: FC = () => {
  const { t } = useTranslation();

  const [showPass, setShowPass] = useState(false);

  return (
    <div className="bg-bg h-screen">
      <div className="flex flex-col items-center w-60 h-full m-auto py-12">
        <h3 className="text-4xl text-gray-700">{t('Welcome')}</h3>

        <div className="my-6">
          <img src={logo} alt="billy" />
        </div>

        <div className="w-full my-6">
          <label htmlFor="email_login" className="pl-1 text-main">
            {t('Email')}
          </label>

          <Input
            id="email_login"
            fullWidth
            type="email"
            placeholder={t('Email')}
            className="py-4 text-xl"
          />
        </div>

        <div className="w-full my-6">
          <label htmlFor="password_login" className="pl-1 text-main">
            {t('Password')}
          </label>

          <div className="relative">
            <Input
              id="password_login"
              fullWidth
              type={showPass ? 'text' : 'password'}
              placeholder={t('Password')}
              className="pr-8 text-xl py-4"
            />

            <Button
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-0 right-0"
              title={`${showPass ? t('Hide') : t('Show')} ${t('Password')}`}
            >
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </Button>
          </div>
        </div>

        <div className="my-8 w-full">
          <Button fullWidth className="bg-main text-textLight">
            Login
          </Button>
        </div>

        <div className="my-8 w-full text-gray-700">
          <span>{t('Do not have an account?')}</span>

          <span>{` `}</span>

          <Link to={ROUTES.signup} className="text-main">
            {t('Sign up')}
          </Link>
        </div>

        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Login;
