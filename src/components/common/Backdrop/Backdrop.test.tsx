import { fireEvent, render, RenderResult } from '@testing-library/react';
import React from 'react';
import Backdrop from './Backdrop';

const handleClick = jest.fn();

describe('Backdrop', () => {
  let ui: RenderResult;
  let open: boolean;
  describe('in closed state', () => {
    beforeEach(() => {
      open = false;
      ui = render(<Backdrop onClick={handleClick} open={open} />);
    });

    it('should should render properly', () => {
      expect(ui.container).toMatchSnapshot();
    });

    it('should be transparent if the "open" prop is false', () => {
      const backdrop = ui.getByRole('presentation');
      expect(backdrop).toHaveClass('opacity-0');
    });
  });
  describe('in open state', () => {
    beforeEach(() => {
      open = true;
      ui = render(<Backdrop onClick={handleClick} open={open} />);
    });

    it('should should render properly', () => {
      expect(ui.container).toMatchSnapshot();
    });
    it('should be a half opaque if the "open" prop is true', () => {
      const backdrop = ui.getByRole('presentation');
      expect(backdrop).toHaveClass('opacity-50');
    });

    it('should trigger an onClick callback on click', () => {
      const backdrop = ui.getByRole('presentation');
      fireEvent.click(backdrop);
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
