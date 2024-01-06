import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from './Color';

const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare Products"/>
            <BreadCrumb title="Compare Products"/>
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className="title">Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with WI-FI 5G</h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div className="">
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Brand:</h6>
                                            <p className='mb-0'>Havels</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Type:</h6>
                                            <p className='mb-0'>Watch</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Availablity:</h6>
                                            <p className='mb-0'>In Stock</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Color:</h6>
                                            <Color/>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Size:</h6>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className="title">Honor T1 7.0.1 GB RAM 8GB ROM 7 Inch with WI-FI 5G</h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div className="">
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Brand:</h6>
                                            <p className='mb-0'>Havels</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Type:</h6>
                                            <p className='mb-0'>Watch</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Availablity:</h6>
                                            <p className='mb-0'>In Stock</p>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Color:</h6>
                                            <Color/>
                                        </div>
                                        <div className="product-detail ">
                                            <h6 className='mb-0'>Size:</h6>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompareProduct;
