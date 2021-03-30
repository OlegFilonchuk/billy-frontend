import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTests';

const renderWithI18n = (ui: JSX.Element) =>
  render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);

export default renderWithI18n;
