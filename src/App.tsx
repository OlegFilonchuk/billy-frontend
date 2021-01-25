import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';

function App() {
  return (
    <div className="container p-0">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Layout>
              <Main />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
