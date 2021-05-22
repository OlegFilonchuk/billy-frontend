import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { I18nextProvider } from 'react-i18next';
import LanguageSwitch from '../components/common/LanguageSwitch/LanguageSwitch';
import i18n from '../utils/i18nForTests';

export default {
  title: 'LanguageSwitch',
  component: LanguageSwitch,
} as Meta;

const Template: Story = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '2em',
    }}
  >
    <I18nextProvider i18n={i18n}>
      <LanguageSwitch />
    </I18nextProvider>
  </div>
);

export const Switch = Template.bind({});
