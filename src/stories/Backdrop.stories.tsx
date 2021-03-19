import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Backdrop, {
  BackdropProps,
} from '../components/common/Backdrop/Backdrop';

export default {
  title: 'Backdrop',
  component: Backdrop,
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Slow = Template.bind({});
Slow.args = {
  open: true,
  transitionDuration: 1000,
};
