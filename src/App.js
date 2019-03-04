import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import PrivateRoute from './components/private-route';
import DisplaySidebar from "./components/sidebar";

const Login = lazy(() => import('./components/login'));
const ForgotPassword = lazy(() => import('./components/forgot-password'));
const Err404 = lazy(() => import('./components/err404'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Projects = lazy(() => import('./components/projects'));
const Tasks = lazy(() => import('./components/tasks'));
const Discussions = lazy(() => import('./components/discussions'));
const Users = lazy(() => import('./components/users'));
const Settings = lazy(() => import('./components/settings'));
const LogOut = lazy(() => import('./components/logout'));

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <DisplaySidebar/>
                <Suspense fallback={<div className={"main-panel"}>Loading...</div>}>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/forgot-password" component={ForgotPassword}/>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path="/projects" component={Projects}/>
                        <PrivateRoute exact path="/tasks" component={Tasks}/>
                        <PrivateRoute exact path="/discussions" component={Discussions}/>
                        <PrivateRoute exact path="/users" component={Users}/>
                        <PrivateRoute exact path="/settings" component={Settings}/>
                        <PrivateRoute exact path="/logout" component={LogOut}/>
                        <Redirect from="/" to="/dashboard"/>
                        <Route component={Err404}/>
                    </Switch>
                </Suspense>
                </div>
            </Router>
        );
    }
}

export default App;
