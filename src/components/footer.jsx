import React, { Component } from 'react';
import ladies__img from '../../src/images/ladies.svg';
import group__47__img from '../../src/images/Group-47.svg';
import subscribe__banner__img from '../../src/images/subscribe-banner.png';
import Badge from './customerBadge';


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    {/* footer form */}
                    <div className="row justify-content-center main-banner text-white">
                        <div className="col-lg-4 col-md-6">
                                <img src={subscribe__banner__img} className="main-banner-img" alt=""/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-offset-4">
                            <h4 className="body__h1">Be a member <br/>of our community 🎉</h4>
                            <br/>
                            <br/>
                            <p>
                                We'd make sure you're always first to know what's happening on Vasiti-thus,the World.
                            </p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-controle" placeholder="Enter your email address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary bg-white input__button">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                    
                    {/* footer div */}
                    <div className="footer__Bg">
                        <div className="row text-white">
                            <div className="col m-4 text-white">
                                
                                <ul style={{listStyleType: 'none'}}>
                                    <h5 className="my-4">Company</h5>
                                    <li className="footer-text"><a href="" className="text-white">About us</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Terms of use</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Privacy Policy</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Press and Media</a></li>
                                </ul>
                            </div>
                            <div className="col m-4 text-white">
                                <ul style={{listStyleType: 'none'}}>
                                    <h5 className="my-4">Product</h5>
                                    <li className="footer-text"><a href="" className="text-white">Marcket place</a></li>
                                    <li className="footer-text"><a href="" className="text-white">magazin</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Seller</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Wholesale</a></li>
                                    <li className="footer-text"><a href="" className="text-white">Services</a></li>
                                </ul>
                            </div>
                            <div className="col m-4 text-white">
                            <ul style={{listStyleType: 'none'}}>
                                <h5 className="my-4">Careers</h5>
                                <li className="footer-text"><a href="" className="text-white">Become a campus Rep</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become a Vasiti influencer</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become a campus writer</a></li>
                                <li className="footer-text"><a href="" className="text-white">Become an Affiliate</a></li>
                            </ul>
                            </div>
                            <div className="col m-4 text-white">
                            <ul style={{listStyleType: 'none'}}>
                                <h5 className="my-4">Get in touch</h5>
                                <li className="footer-text"><a href="" className="text-white">Contact Us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Partner with us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Advertise with us</a></li>
                                <li className="footer-text"><a href="" className="text-white">Help/FaQs</a></li>
                            </ul>
                            </div>
                            <div className="col m-4 text-white">
                                <ul style={{listStyleType: 'none'}}>
                                    <h5 className="my-4">Join our Community</h5>
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