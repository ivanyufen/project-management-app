import React from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/project/ProjectDetail';
import NotFound from './components/404/NotFound';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetail}></Route>
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/create" component={CreateProject}></Route>
          <Route component={NotFound}></Route>
        </Switch>

      </div>
    );
  }
}

export default App;
