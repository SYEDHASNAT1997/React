import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import { Matform } from './Matform';
import { ReceiveData } from './ReceiveData';
import {Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
<div className="main">
  
    </div>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route exact path="/Matform" component={Matform}/>
    <Route exact path="/ReceiveData" component={ReceiveData}/>

      </Switch>
    </div>
  );
}

export default App;