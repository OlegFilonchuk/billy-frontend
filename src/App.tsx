import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Main from './components/Main';
import NewOp from './components/NewOp';
import Signup from './components/Signup';
import { ROUTES } from './constants';

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

          <Route path={ROUTES.income} exact>
            <Layout>
              <NewOp opType="income" />
            </Layout>
          </Route>

          <Route path={ROUTES.expense} exact>
            <Layout>
              <NewOp opType="expense" />
            </Layout>
          </Route>

          <Route path={ROUTES.login} exact>
            <Login />
          </Route>

          <Route path={ROUTES.signup} exact>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
