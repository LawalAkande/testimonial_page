import React, { Component } from 'react';
import VendorBadge from './vendorBadge';
import womanShoppingBag__img from '../../src/images/woman-shoppingbag-card1.svg';
import groupDePerson__img from '../../src/images/group-de-person.svg';
import shareYour__img from '../../src/images/shareYour.svg';

class WomanShopping extends Component {
    state = {  };
    styles = {
        color: 'yellow'
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row womanShopping__bg">
                        <div className="col" style={{margin: '50px'}}>
                            <div >
                                <h4>Josiah's Experience</h4>
                                <button className="badge vendor my-3">Vendor</button>
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
                            </div>
                            <span>
                                <img src={shareYour__img} alt="group 47"/>
                            </span>
                        </div>
                        <div className="col">
                            <div className="body__bgimg">
                                <img src={womanShoppingBag__img} className="body__img" alt="womanshopping-image"/>  
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default WomanShopping;