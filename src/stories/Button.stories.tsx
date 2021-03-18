import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../components/common/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  children: 'Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  children: 'Button',
};

export const Column = Template.bind({});
Column.args = {
  column: true,
  children: [<span>Button</span>, <span>Column</span>],
};
