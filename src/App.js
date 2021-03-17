// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import CustomerAndVendor from './components/customerAndVendor';
import Footer from './components/footer';
import MainBody from './components/mainBody';
import Navbar from './components/navbar';
import Vendors from './components/vendors';
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
          <Vendors />
          <Footer />
      </React.Fragment>
     );
  }
}
 
export default App;
