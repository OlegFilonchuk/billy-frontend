import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { I18nextProvider } from 'react-i18next';
import BackButton from '../components/common/BackButton/BackButton';
import i18n from '../utils/i18nForTests';

export default {
  title: 'BackButton',
  component: BackButton,
} as Meta;

const Template: Story = () => (
  <I18nextProvider i18n={i18n}>
    <BackButton />
  </I18nextProvider>
);

export const Common = Template.bind({});
