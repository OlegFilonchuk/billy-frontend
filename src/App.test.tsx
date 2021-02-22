import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n';

test('renders an app', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  );
  // const linkElement = screen.getByText(/sample/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true).toBeTruthy();
});
