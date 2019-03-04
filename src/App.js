import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import PrivateRoute from './components/private-route';

const Home = lazy(() => import('./components/home'));
const Login = lazy(() => import('./components/login'));
const ForgotPassword = lazy(() => import('./components/forgot-password'));

class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/forgot-password" component={ForgotPassword}/>
                        <PrivateRoute path="/" component={Home}/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;
