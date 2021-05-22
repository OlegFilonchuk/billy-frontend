import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Divider, { DividerProps } from '../components/common/Divider';

export default {
  title: 'Divider',
  component: Divider,
} as Meta;

const VerticalTemplate: Story<DividerProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      height: '2em',
    }}
  >
    <span
      style={{
        margin: 6,
      }}
    >
      one
    </span>

    <Divider {...args} />

    <span
      style={{
        margin: 6,
      }}
    >
      one
    </span>
  </div>
);

export const Dark = VerticalTemplate.bind({});
Dark.args = {
  color: 'dark',
  horizontal: false,
};

export const Light = VerticalTemplate.bind({});
Light.args = {
  color: 'light',
  horizontal: false,
};

const HorizontalTemplate: Story<DividerProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span>one</span>

    <Divider {...args} />

    <span>one</span>
  </div>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  horizontal: true,
};
