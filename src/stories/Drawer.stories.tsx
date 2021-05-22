import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Drawer, { DrawerProps } from '../components/common/Drawer/Drawer';

export default {
  title: 'Drawer',
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>Drawer</Drawer>
);

export const Left = Template.bind({});
Left.args = {
  side: 'left',
  open: true,
};

export const Right = Template.bind({});
Right.args = {
  side: 'right',
  open: true,
};

export const Slow = Template.bind({});
Slow.args = {
  transitionDuration: 1000,
  side: 'left',
  open: true,
};
