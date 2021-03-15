import { Button } from 'bootstrap';
// import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import Badge from './customerBadge';
// import CustomerBadge from './customerBadge';


class MainBody extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col ">
                            <h1 className="body__h1">Amazing <br/>experience from Our <br/>Wonderful Customers</h1>
                            <p className="body__p">Here is what customers and vendors are sayingbout us, you can share your stories with us too.</p>
                        </div>
                        <div className="col">
                            <div className="body__bgimg">
                                <img src="/images/Group__81.svg" className="body__img" alt="vasity-logo"/>  
                            </div>
                        </div>
                    </div>
                    <div className="row body__row2">
                        <div className="col">
                            <img src="/images/Group__89.svg"  claasName="body__img2" alt="ladies"/>
                        </div>
                        <div className="col" style={{margin: '60px', marginTop: '90px'}}>
                            <h4>Tolu's and Joy's experience</h4>
                            <Badge />
                            <br/>
                            <br/>
                            <address style={{textAlign: 'justify'}}>
                                I had the best exerience with vasiti.
                                Usability of the website was great, very good
                                customers service, all rounf great
                                experience. I would definitly be coming back!
                                I had the best experience shopping with vasiti.
                                Usability of the website was great, very good
                                customers service, all rounf great
                                experience. I would definitly be coming back!
                            </address>
                            <br/>
                            <br/>
                            <span>
                                <img src="/images/Group__47.svg" alt="group 47"/>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MainBody;