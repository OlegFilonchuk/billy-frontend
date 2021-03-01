import { fireEvent, RenderResult } from '@testing-library/react';
import React from 'react';
import renderWithI18n from '../../../utils/testUtills';
import BackButton from './BackButton';

const mock = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    goBack: mock,
  }),
}));

describe('BackButton', () => {
  let ui: RenderResult;
  beforeEach(() => {
    ui = renderWithI18n(<BackButton />);
  });

  it('should render properly', () => {
    expect(ui.container).toMatchSnapshot();
  });

  it("should trigger history's goBack function", () => {
    const button = ui.getByTitle('Go back');

    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });
});
