import React, { Component } from 'react';
import VendorBadge from './vendorBadge';

class WomanShopping extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row womanShopping__bg">
                        <div className="col" style={{margin: '60px', marginTop: '90px'}}>
                            <h4>Josiah's Experience</h4>
                            <VendorBadge />
                            <address style={{textAlign: 'justify'}}>
                                I had the best experience shopping with vasiti. 
                                Usability of the website was great, very good 
                                customer service, an all round great experience. I 
                                would definately be coming back! I had the best 
                                experience shopping with vasiti. Usability of the 
                                website was great, very good customer service, an 
                                all round great experience. I would definately be 
                                coming back!
                            </address>
                            <br/>
                            <br/>
                            <span>
                                <img src="/images/shareYour.svg" alt="group 47"/>
                            </span>
                        </div>
                        <div className="col">
                            <div className="body__bgimg">
                                <img src="/images/woman-shoppingbag-card 1.svg" className="body__img" alt="womanshopping-image"/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src="/images/groupDeperson.svg" alt="group__images" className="group__images"/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default WomanShopping;