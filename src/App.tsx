import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './components/pages/Categories';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import NewOp from './components/pages/NewOp';
import Signup from './components/pages/Signup';
import { ROUTES } from './constants';
import { OpType } from './types';

function App() {
  return (
    <div className="container p-0">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Layout withBack={false}>
              <Main />
            </Layout>
          </Route>

          <Route path={ROUTES.income} exact>
            <Layout>
              <NewOp opType={OpType.income} />
            </Layout>
          </Route>

          <Route path={ROUTES.expense} exact>
            <Layout>
              <NewOp opType={OpType.expense} />
            </Layout>
          </Route>

          <Route path={ROUTES.login} exact>
            <Login />
          </Route>

          <Route path={ROUTES.signup} exact>
            <Signup />
          </Route>

          <Route path={ROUTES.categories}>
            <Layout>
              <Categories />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
