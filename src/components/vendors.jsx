import React, { Component } from 'react';
import Badge from './customerBadge';
import VendorBadge from './vendorBadge';
import temi__img from '../../src/images/temi.png';
import promise__img from '../../src/images/promise.png';
import feyisola__img from '../../src/images/feyisola.png';
import karen__img from '../../src/images/karen.png';
import oluchi__img from '../../src/images/oluchi.png';
import amos__img from '../../src/images/amos.png';


class vendors extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={temi__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Temi Obadofin</h3>
                                <span>
                                <VendorBadge style={{color: "yellow"}}/>
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
                                <img src={promise__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Promise Ejiofor</h3>
                                <span>
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
                                <img src={feyisola__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Feyisola Arinola</h3>
                                <span>
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
                        <div className="col-lg-3 col-md-6 m-3">
                            <div className="card-body">
                                <img src={karen__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Karen Ibeh</h3>
                                <span>
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
                                <img src={oluchi__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Oluchi Uzo</h3>
                                <span>
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
                                <img src={amos__img} className="image-fluid rounded-circle w-50 mb-3" alt=""/>
                                <h3>Amos Okafor</h3>
                                <span>
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
 
export default vendors;