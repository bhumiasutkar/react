import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import Sidebar from "./component/Sidebar/Sidebar";
import Login from "./component/Login/Login";
import Dashboard from './component/Dashboard/Dashboard';
import User from './component/User/User';
import ViewUser from "./component/User/ViewUser";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
            <Sidebar />
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/add-user' component={User}></Route>
            <Route path='/view-user' component={ViewUser}></Route>
            </Switch>
        </AuthProvider>
       
      </Router>
      </>
  );
}

export default App;
