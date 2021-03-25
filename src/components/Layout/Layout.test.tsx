import { RenderResult } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithI18n from '../../utils/testUtills';
import Layout from './Layout';

describe('Layout', () => {
  let ui: RenderResult;

  beforeEach(() => {
    ui = renderWithI18n(
      <MemoryRouter>
        <Layout>test</Layout>
      </MemoryRouter>,
    );
  });

  it('should render properly', () => {
    expect(ui.container).toMatchSnapshot();
  });
});
