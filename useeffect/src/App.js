import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store/store";
import AuthContext from "./context/auth-context";
import ThemeProvider from './context/theme';

import Login from "./Components/Login/Login";
import Home from "./Home/Home";
import StoreMain from "./Components/storeMain";
import TestPage from './Components/pages/TestPage';
import PrivateRoute from "./context/PrivateRoute";
import { Roles } from "./context/Roles";
import Admin from './Components/pages/Admin';
import CreateTodo from './todo/CreateTodo';
import ViewTasks from "./todo/ViewTasks";

function App () {
  const ctx = useContext(AuthContext);
  return (
    <>

      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route
                path="user"
                element={<PrivateRoute roles={[Roles.ADMIN]} authComponent={StoreMain} />}
              />

              <Route
                path="test-page"
                element={<PrivateRoute  authComponent={TestPage} />}
              />
              <Route
                path="/"
                element={<PrivateRoute roles={[Roles.ADMIN]} authComponent={Home} />}
             
             /> */}
              <Route path='/' element={<Home />}></Route>
              <Route path='/admin' element={<Admin />}></Route>
              <Route path='/test-page' element={<TestPage />}></Route>
              <Route path='/user' element={<StoreMain />}></Route>
              <Route path='/todo' element={<CreateTodo />}></Route>
              <Route path='/view-list' element={<ViewTasks />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

