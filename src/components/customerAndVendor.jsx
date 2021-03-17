import React, { Component } from 'react';
import Badge from './customerBadge';
import VendorBadge from './vendorBadge';
import joseph__img from '../../src/images/joseph.svg';
import adetola__img from '../../src/images/adetola.svg';
import emmanuel__img from '../../src/images/emmanuel.svg';
import chisom__img from '../../src/images/chisom.svg';
import adunoluwa__img from '../../src/images/adunoluwa.svg';
import chidi__img from '../../src/images/chidi.svg';

class CustomerAndVendor extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={joseph__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Joseph Ike</h3>
                                <span>
                                    <span>In Ikeja</span>
                                    <Badge />
                                </span>
                                <p>
                                Aliqua id fugiat nostrud irure ex duis 
                                ea quis id quis ad et. Sunt qui esse 
                                pariatur duis deserunt mollit dolore 
                                cillum minim tempor enim. Elit aute 
                                irure tempor cupidatat incididunt sint 
                                deserunt ut voluptate aute id 
                                deserunt nisi. Aliqua id fugiat nostrud 
                                irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt 
                                mollit dolore cillum minim tempor enim.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={adetola__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Adetola Fashina</h3>
                                <span>
                                    <span>Ibadan</span>
                                    <Badge />
                                </span>
                                <p>
                                Aliqua id fugiat nostrud irure ex duis ea 
                                quis id quis ad et. Sunt qui esse pariatur 
                                duis deserunt mollit dolore cillum minim tempor 
                                enim. Elit aute irure tempor cupidatat incididunt 
                                sint deser unt ut voluptate aute id deserunt nisi. 
                                Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim 
                                velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={emmanuel__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Emmanuel Fayemi</h3>
                                <span>
                                    <span>In Akoka</span>
                                    <Badge />
                                </span>
                                <p>
                                    Aliqua id fugiat nostrud irure ex duis 
                                    ea quis id quis ad et. Sunt qui esse 
                                    pariatur duis deserunt mollit dolore 
                                    cillum minim tempor enim. Elit aute 
                                    irure tempor cupidatat incididunt sint 
                                    deserunt ut voluptate aute id 
                                    deserunt nisi. Elit aute irure tempor 
                                    cupidatat incididunt sint deser unt ut 
                                    voluptate aute id deserunt nisi. 
                                    Amet minim mollit non deserunt ullamco est 
                                    sit aliqua dolor do amet sint.
                                
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={chisom__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Chisom Obilor</h3>
                                <span>
                                    <span>In Ikeja</span>
                                    <VendorBadge />
                                </span>
                                <p>
                                Aliqua id fugiat nostrud irure ex duis 
                                ea quis id quis ad et. Sunt qui esse 
                                pariatur duis deserunt mollit dolore 
                                cillum minim tempor enim. Elit aute 
                                irure tempor cupidatat incididunt sint 
                                deserunt ut voluptate aute id 
                                deserunt nisi. Aliqua id fugiat nostrud 
                                irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt 
                                mollit dolore cillum minim tempor enim.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={adunoluwa__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Adunoluwa Adeyemi</h3>
                                <span>
                                    <span>In Ikeja</span>
                                    <VendorBadge />
                                </span>
                                <p>
                                Aliqua id fugiat nostrud irure ex duis ea 
                                quis id quis ad et. Sunt qui esse pariatur 
                                duis deserunt mollit dolore cillum minim tempor 
                                enim. Elit aute irure tempor cupidatat incididunt 
                                sint deser unt ut voluptate aute id deserunt nisi. 
                                Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim 
                                velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={chidi__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Chidi Okeke</h3>
                                <span>
                                    <span>Chidi Okeke</span>
                                    <VendorBadge />
                                </span>
                                <p>
                                    Aliqua id fugiat nostrud irure ex duis 
                                    ea quis id quis ad et. Sunt qui esse 
                                    pariatur duis deserunt mollit dolore 
                                    cillum minim tempor enim. Elit aute 
                                    irure tempor cupidatat incididunt sint 
                                    deserunt ut voluptate aute id 
                                    deserunt nisi. Elit aute irure tempor 
                                    cupidatat incididunt sint deser unt ut 
                                    voluptate aute id deserunt nisi. 
                                    Amet minim mollit non deserunt ullamco est 
                                    sit aliqua dolor do amet sint.
                                </p>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default CustomerAndVendor;