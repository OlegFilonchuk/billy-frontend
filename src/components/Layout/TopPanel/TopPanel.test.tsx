import { fireEvent, RenderResult } from '@testing-library/react';
import React from 'react';
import TopPanel from './TopPanel';
import renderWithI18n from '../../../utils/testUtills';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/',
  }),
  useHistory: () => ({
    goBack: jest.fn(),
  }),
}));

describe('TopPanel', () => {
  let ui: RenderResult;
  const onRangesToggle = jest.fn();
  const onMenuToggle = jest.fn();

  describe('with "withBack" prop set to true or unset', () => {
    beforeEach(() => {
      ui = renderWithI18n(
        <TopPanel
          onMenuToggle={onMenuToggle}
          onRangesToggle={onRangesToggle}
        />,
      );
    });

    it('should render properly', () => {
      expect(ui.container).toMatchSnapshot();
    });

    it('should contain back button by default', () => {
      const backButton = ui.getByTitle('Go back');
      expect(backButton).toBeInTheDocument();
    });

    it('should contain "Select Date Range" button if pathname is "/"', () => {
      const rangeButton = ui.getByTitle('Select Date Range');
      expect(rangeButton).toBeInTheDocument();
    });

    it('should contain "Menu" button if pathname is "/"', () => {
      const menuButton = ui.getByTitle('Menu');
      expect(menuButton).toBeInTheDocument();
    });

    it('should contain logo in pathname is "/"', () => {
      const logo = ui.getByAltText('Billy');
      expect(logo).toBeInTheDocument();
    });

    it('should trigger callbacks on buttons click', () => {
      expect(onRangesToggle).not.toHaveBeenCalled();
      expect(onMenuToggle).not.toHaveBeenCalled();

      const rangeButton = ui.getByTitle('Select Date Range');
      const menuButton = ui.getByTitle('Menu');

      fireEvent.click(rangeButton);
      fireEvent.click(menuButton);

      expect(onRangesToggle).toHaveBeenCalledTimes(1);
      expect(onMenuToggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('with "withBack" prop set to false', () => {
    beforeEach(() => {
      ui = renderWithI18n(
        <TopPanel
          onMenuToggle={onMenuToggle}
          onRangesToggle={onRangesToggle}
          withBack={false}
        />,
      );
    });

    it('should not contain back button', () => {
      const backButton = ui.queryByTitle('Go back');
      expect(backButton).not.toBeInTheDocument();
    });
  });
});
