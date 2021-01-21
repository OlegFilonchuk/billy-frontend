import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container p-0">
      <Layout>{t('sample')}</Layout>
    </div>
  );
}

export default App;
