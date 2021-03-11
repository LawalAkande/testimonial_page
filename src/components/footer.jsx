import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    <img src="/images/telephone_foter.svg" alt="" />
                    <div className="footer__Bg">
                        <div className="row text-white">
                            <div className="col m-4 text-white">
                                
                                <ul style={{listStyleType: 'none'}}>
                                    <h5>Company</h5>
                                    <li className="footer-text"><a href="" className="text-white">About us</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Terms of use</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Privacy Policy</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Press and Media</a></li>
                                </ul>
                            </div>
                            <div className="col m-4 text-white">
                                <ul style={{listStyleType: 'none'}}>
                                    <h5>Product</h5>
                                    <li className="footer-text"><a href="" className="text-white">Marcket place</a></li>
                                    <li className="footer-text"><a href="" className="text-white">magazin</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Seller</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Wholesale</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Services</a></li>
                                </ul>
                            </div>
                            <div className="col m-4 text-white">
                            <ul style={{listStyleType: 'none'}}>
                                <h5>Careers</h5>
                                <li className="footer-text"><a href="" className="text-white">Become a campus Rep</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become a Vasiti influencer</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become a campus writer</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become an Affiliate</a></li>
                            </ul>
                            </div>
                            <div className="col m-4 text-white">
                            <ul style={{listStyleType: 'none'}}>
                                <h5>Get in touch</h5>
                                <li className="footer-text"><a href="" className="text-white">Contact Us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Partner with us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Advertise with us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Help/FaQs</a></li>
                            </ul>
                            </div>
                            <div className="col m-4 text-white">
                                <ul style={{listStyleType: 'none'}}>
                                    <h5>Join our Community</h5>
                                    <li className="footer-text"><a href="" className="text-white">
                                    <span></span>
                                    </a></li>
                                    <li className="footer-text"><a href="" className="text-white">Email Newsletter</a></li>
                                    <li className="footer-text"><a href="" className="text-white"></a></li>
                                    <li className="footer-text"><a href="" className="text-white"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;