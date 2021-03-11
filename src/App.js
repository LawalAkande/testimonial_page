// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import CustomerAndVendor from './components/customerAndVendor';
import Footer from './components/footer';
import MainBody from './components/mainBody';
// import { Button } from '@material-ui/core'
import Navbar from './components/navbar';
import WomanShopping from './components/womanShopping';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
          <Navbar />
          <MainBody />
          <CustomerAndVendor />
          <WomanShopping />
          <Footer />
      </React.Fragment>
     );
  }
}
 
export default App;
