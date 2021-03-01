import { fireEvent, RenderResult } from '@testing-library/react';
import React from 'react';
import renderWithI18n from '../../../utils/testUtills';
import LanguageSwitch from './LanguageSwitch';

describe('BackButton', () => {
  let ui: RenderResult;
  beforeEach(() => {
    ui = renderWithI18n(<LanguageSwitch />);
  });

  it('should render properly', () => {
    expect(ui.container).toMatchSnapshot();
  });

  it('should have english language button disabled', () => {
    const enButton = ui.getByText('en');
    expect(enButton).toBeDisabled();
  });

  it('should have russian language button enabled', () => {
    const ruButton = ui.getByText('ru');
    expect(ruButton).not.toBeDisabled();
  });

  it('should change buttons state after click', () => {
    const ruButton = ui.getByText('ru');
    fireEvent.click(ruButton);
    const enButton = ui.getByText('en');
    expect(ruButton).toBeDisabled();
    expect(enButton).not.toBeDisabled();
  });
});
