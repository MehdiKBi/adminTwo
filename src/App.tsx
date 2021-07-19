import "./App.css";
import React from "react";
import LoginPage from "./component/Login/LoginPage";
import SideBar from "./component/Sidebar/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Corporate from "./component/Pages/Corporate";
import CheckList from "./component/Pages/CheckList";
import Settings from "./component/Pages/Settings";
import ErrorPage from "./component/Pages/ErrorPage/Error";



function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/login">
            <div className="login">
              <div className="inner-login shadow-lg p-3 mb-5 bg-body rounded">
                <LoginPage />
              </div>
            </div>
          </Route>
          <div className="corporate">
            <div className="mt-5">
              <Route path="/corporate" component={Corporate}/>
              <Route  path="/checklist" component={CheckList}/>
              <Route  path="/settings" component={Settings}/>
              <Route path="/error" component={ErrorPage}/>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
