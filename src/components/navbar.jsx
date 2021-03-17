import { AppBar, Toolbar, IconButton, Button, Tooltip, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import vasitiLogo from '../../src/images/Vasiti-Logo-black-1.png';


class Navbar extends Component {
    styles = {
        listStyleType: 'none'
    }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand mr-auto" href="#">
                                <img src={vasitiLogo} alt="vasity-logo" className="vasity-logo"/>
                            </a>
                            <form className="form-inline my-2 my-lg-0">
                                <li className="nav-item listStyleNone">
                                    <a className="nav-link uppercase text-dark" href="#">about us</a>
                                </li>
                                <li className="nav-item listStyleNone">
                                    <a className="nav-link uppercase text-dark" href="#">stories</a>
                                </li>
                                <li className="nav-item listStyleNone">
                                    <a className="nav-link uppercase text-dark" href="#">contact</a>
                                </li>
                                <Button type="submit">log in</Button>
                                <Button type="submit"style={{color: 'white', backgroundColor: '#FF5C00'}}>sign up</Button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div>
                <ul className="nav justify-content-center " style={{border: '1px solid gray'}}>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">market place</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">wholesale center</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">seller center</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">sevices</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">interships</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link uppercase text-dark m-2" href="#">event</a>
                    </li>
                </ul>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Navbar;