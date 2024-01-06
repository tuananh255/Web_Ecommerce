import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const SingleProduct = () => {
    return (
        <>  
            <Meta title="Product Name"/>
            <BreadCrumb title="Product Name"/>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
