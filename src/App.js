import './App.css';
import Header from './components/Header';
import routes from './components/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
class App extends Component {
  showRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((values, index) => {
        return <Route
          path={values.path}
          exact={values.exact}
          component={values.main}
        />
      });
    }
    return result;
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            {this.showRoute(routes)}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
