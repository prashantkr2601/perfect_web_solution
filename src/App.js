import React from 'react';
import './App.css';
import Axios from "react-aux";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"

import Homepage from "./Components/Homepage/Homepage"
import {Minnavbar} from "./Components/Navbar/Navbar"
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound";


class App extends React.Component{
  render(){
    return(
      <Axios>
        <Router>
          <Switch>

            <Route exact path="/" component={Homepage}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/minnavbar" component={Minnavbar}/>
            <Route exact path="" component={Pagenotfound} />
          </Switch>
        </Router>
      </Axios>
      
    );
  }
}

export default App;
