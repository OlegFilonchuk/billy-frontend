import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_green.png';
import { ROUTES } from '../../../constants';
import Button from '../../common/Button';
import Input from '../../common/Input';
import LanguageSwitch from '../../common/LanguageSwitch';

const Signup: FC = () => {
  const { t } = useTranslation();

  const [showPass, setShowPass] = useState(false);

  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const match = pass === repeatPass;

  return (
    <div className="bg-bg h-screen">
      <div className="flex flex-col items-center w-60 h-full m-auto py-12">
        <h3 className="text-4xl text-gray-700">{t('Create an account')}</h3>

        <div className="my-2">
          <img src={logo} alt="billy" />
        </div>

        <div className="w-full my-2">
          <label htmlFor="name_signup" className="pl-1 text-main">
            {t('Name')}
          </label>

          <Input
            id="name_signup"
            fullWidth
            type="text"
            placeholder={t('Name')}
            className="py-4 text-xl"
          />
        </div>

        <div className="w-full my-2">
          <label htmlFor="email_signup" className="pl-1 text-main">
            {t('Email')}
          </label>

          <Input
            id="email_signup"
            fullWidth
            type="email"
            placeholder={t('Email')}
            className="py-4 text-xl"
          />
        </div>

        <div className="w-full my-2">
          <label htmlFor="password_login" className="pl-1 text-main">
            {t('Password')}
          </label>

          <div className="relative">
            <Input
              value={pass}
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                setPass(ev.target.value);
              }}
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

        <div className="w-full my-2">
          <label htmlFor="repeat_password_login" className="pl-1 text-main">
            {t('Password')}
          </label>

          <div className="relative">
            <Input
              value={repeatPass}
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                setRepeatPass(ev.target.value);
              }}
              id="repeat_password_login"
              fullWidth
              type={showPass ? 'text' : 'password'}
              placeholder={t('Repeat Password')}
              className="pr-8 text-xl py-4"
            />
          </div>
        </div>

        <div className="my-8 w-full">
          <Button fullWidth className="bg-main text-textLight">
            Sign up
          </Button>
        </div>

        <div className="my-8 w-full text-gray-700">
          <span>{t('Already have an account?')}</span>

          <span>{` `}</span>

          <Link to={ROUTES.login} className="text-main">
            {t('Login')}
          </Link>
        </div>

        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Signup;
