import React, {Component} from 'react'
import AddEmployee from './../pages/AddEmployee';
import ListEmployees from './../pages/ListEmployees';

import {
  Switch,
  Link,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default class Header extends Component {

  state = {

  }

  componentDidMount(){

  }

  render(){
    return (
      <Router>
        <div className="headerContainer">
          <ul>
            <li>
              <Link to="/listemployees">List Employees</Link>
            </li>
            <li>
              <Link to="/addemployee">Add Employee</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <ListEmployees />
          </Route>
          <Route path="/addemployee">
            <AddEmployee />
          </Route>
          <Route path="/listemployees" component={ListEmployees} />
        </Switch>
      </Router>
    )
  }
}
