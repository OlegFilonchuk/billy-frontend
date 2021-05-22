import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import ButtonLink, { ButtonLinkProps } from '../components/common/ButtonLink';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => (
  <BrowserRouter>
    <ButtonLink {...args} />
  </BrowserRouter>
);

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  children: 'Button Link',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  children: 'Button Link',
};

export const Column = Template.bind({});
Column.args = {
  column: true,
  children: [<span>Button Link</span>, <span>Column</span>],
};
