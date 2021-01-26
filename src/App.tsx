import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import NewOp from './components/NewOp';

function App() {
  return (
    <div className="container p-0">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Main />
            </Layout>
          </Route>

          <Route path="/income" exact>
            <Layout>
              <NewOp opType="income" />
            </Layout>
          </Route>

          <Route path="/expense" exact>
            <Layout>
              <NewOp opType="expense" />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
