import React from 'react';
import {Link} from 'react-router-dom'
// run content in your div
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
const Home = () => {
    return (
    <>
        {/* show title */}
        <Meta title="Ecommerce"/> 
        {/* end show title */}
        <section className='home-wrapper-1 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img 
                                src="images/main-banner.jpg" 
                                className='img-fluid rounded-3' 
                                alt="main banner" 
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro</h5>
                                <p>From $999.00 or $41.62/mo</p>
                                <Link className='button'>BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img 
                                    src="images/catbanner-01.jpg" 
                                    className='img-fluid rounded-3' 
                                    alt="small banner" 
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>BEST SALE.</h4>
                                    <h5>iPad S13+ Pro</h5>
                                    <p>From $999.00 <br />or $41.62/mo</p>
                                </div>
                            </div>

                            <div className="small-banner position-relative">
                                <img 
                                    src="images/catbanner-02.jpg" 
                                    className='img-fluid rounded-3' 
                                    alt="small banner" 
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL.</h4>
                                    <h5>By IPad Air</h5>
                                    <p>From $999.00 <br />or $41.62/mo</p>
                                </div>
                            </div>

                            <div className="small-banner position-relative">
                                <img 
                                    src="images/catbanner-03.jpg" 
                                    className='img-fluid rounded-3' 
                                    alt="small banner" 
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL.</h4>
                                    <h5>By IPad Air</h5>
                                    <p>From $999.00 <br />or $41.62/mo</p>
                                </div>
                            </div>

                            <div className="small-banner  position-relative">
                                <img 
                                    src="images/catbanner-04.jpg" 
                                    className='img-fluid rounded-3' 
                                    alt="small banner" 
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL.</h4>
                                    <h5>By IPad Air</h5>
                                    <p>From $999.00 <br />or $41.62/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="servies d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service.png" alt="servies" />
                                <div className="">
                                    <h6>Free Shipping</h6>
                                    <p className='mb-0'>From all orders over $100</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="servies" />
                                <div className="">
                                    <h6>Daily Surprice Offers</h6>
                                    <p className='mb-0'>Save up to 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="servies" />
                                <div className="">
                                    <h6>Support 24/7</h6>
                                    <p className='mb-0'>Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="servies" />
                                <div className="">
                                    <h6>Affordable Prices</h6>
                                    <p className='mb-0'>Get Factory</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-05.png" alt="servies" />
                                <div className="">
                                    <h6>Secure Payments</h6>
                                    <p className='mb-0'>100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='home-wrapper-2 py-5'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Smart Tv</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Smart Watches</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Smart Tv</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Smart Watches</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="featured-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </section>
        <section className="famous-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative" style={{backgroundColor:"#000"}}>
                            <div className="famous-content position-absolute">
                                <h5 className="text-white">Big Screen</h5>
                                <h6 className="text-white">Smart Watch Series 7</h6>
                                <p className='text-white'>From $399 or $16,62/mo. For 24 mo </p>
                            </div>
                            <img src="images/famous-1.jpg" className='img-fluid' alt="famous"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h5 className="">Smart Watch</h5>
                                <h6 className="">Smart Watch Series 8 utra</h6>
                                <p>From $399 or $16,62/mo. For 24 mo </p>
                            </div>
                            <img src="images/famous-02.jpg" className='img-fluid imgs' alt="famous"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h5 className="">Smart Phone</h5>
                                <h6 className="">Smart Phone 15 Pro Max</h6>
                                <p>From $399 or $16,62/mo. For 24 mo </p>
                            </div>
                            <img src="images/famous-05.jpg" className='img-fluid imgs' alt="famous"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h5 className="">Smart Watch</h5>
                                <h6 className="">Smart Watch Series 10</h6>
                                <p>From $399 or $16,62/mo. For 24 mo </p>
                            </div>
                            <img src="images/famous-04.jpg" className='img-fluid imgs' alt="famous"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='special-wrapper py-5 home-wrapper-2'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Special Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct/>
                    <SpecialProduct/>
                    <SpecialProduct/>
                    <SpecialProduct/>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-2">
                        <div className="card"></div>
                    </div>
                    <div className="col-2">
                        <div className="card"></div>
                    </div> */}
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </section>

        {/* run brand */}
        <section className="marque-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row"> 
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee  className='d-flex'>
                                {/* my component */}
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                 <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Latest Blogs
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default Home;
