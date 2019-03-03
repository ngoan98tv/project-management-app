import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./components/home'));
const Login = lazy(() => import('./components/login'));

const App = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Suspense>
    </Router>
);

export default App;
