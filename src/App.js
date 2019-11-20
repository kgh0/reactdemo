import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import Login from "./pages/Login";
import Main from "./pages/Main";

// import moment from 'moment';
// import 'moment/locale/zh-cn';

// moment.locale('zh-cn');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route  path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
