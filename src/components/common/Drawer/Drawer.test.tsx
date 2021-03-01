import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import Drawer from './Drawer';

describe('Drawer', () => {
  const side = 'left';
  let ui: RenderResult;
  let open: boolean;

  describe('in the open state', () => {
    beforeEach(() => {
      open = true;
      ui = render(<Drawer side={side} open={open} />);
    });

    it('should render properly', () => {
      expect(ui.container).toMatchSnapshot();
    });
  });

  describe('in the closed state', () => {
    beforeEach(() => {
      open = false;
      ui = render(<Drawer side={side} open={open} />);
    });

    it('should render properly', () => {
      expect(ui.container).toMatchSnapshot();
    });
  });
});
