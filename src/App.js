import React, {Component} from 'react';
import {
  BrowerRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from './homepage';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Button, Badge } from "reactstrap";
import Footer from "./footer";
import Slides from "./informative";
import Details from "./Stockdetails";
import DATA from "./stock";

class App extends Component {
render () {
  return (
    <BrowserRouter>
         
      <Head/>
        <Switch>
          <Route path="/" component={Slides} exact /> 
          <Route path="/ss" component={DATA}  />
          <Route path = '/stock/:id' component = {Details} />        
        </Switch>
     
      <Footer/>
  

  </BrowserRouter>

  );
}
 
}
export default App;
