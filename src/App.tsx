import React, { FC, Suspense } from 'react';
import { BrowserRouter, /* Route, */ Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import Layout from './components/Layout/Layout';
// import Categories from './components/pages/Categories';
// import CategoryPage from './components/pages/Categories/CategoryPage';
// import Login from './components/pages/Login';
// import Main from './components/pages/Main';
// import NewOp from './components/pages/NewOp';
// import Signup from './components/pages/Signup';
// import { ROUTES } from './constants';
// import { OpType } from './types';

const queryClient = new QueryClient();

const AppPage: FC = () => {
  return (
    <div className="container p-0">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact>
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

            <Route path={ROUTES.categories} exact>
              <Layout>
                <Categories />
              </Layout>
            </Route>

            <Route path={`${ROUTES.categories}/:type/:id`}>
              <Layout>
                <CategoryPage />
              </Layout>
            </Route> */}
            test
          </Switch>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

const App: FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <AppPage />
  </Suspense>
);

export default App;
