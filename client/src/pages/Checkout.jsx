import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import watch from '../images/watch.jpg'
import Container from '../components/Container';
const Checkout = () => {
    return (
        <>
            <Meta title="Check Out"/>
            <BreadCrumb title="Check Out"/>

            <Container class1="checkout-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Dev AnhTuan</h3>
                            <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className='text-dark total-price' to="/cart">Cart</Link></li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">AnhTuan ( minmaxtuan@gmail.com )</p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form className='d-flex gap-15 flex-wrap justify-content-between' action="">
                                <div className="w-100">
                                    <select className='form-control form-select' name="" id="">
                                        <option value="" selected disabled>
                                            Select Country  
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='First Name ...' name="" className='form-control' id="" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder='Last Name ...' name="" className='form-control' id="" />
                                </div>
                                <div className="w-100">
                                    <input type="text" name="" placeholder='Address' className='form-control' id="" />
                                </div>
                                <div className="w-100">
                                    <input type="text" name="" placeholder='Apartment, Suite, etc' className='form-control' id="" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" name="" placeholder='City' className='form-control' id="" />
                                </div>
                                <div className="flex-grow-1">
                                    <select className='form-control form-select' name="" id="">
                                        <option value='' selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" name="" placeholder='Zipcode' className='form-control' id="" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Link className='text-dark' to='/cart'><IoMdArrowBack className='me-2'/>Return To Cart</Link>
                                        <Link to='/product' className='button'>Continue To Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 d-flex align-items-center gap-15">
                                    <div className="w-25 position-relative">
                                        <span style={{top:"-10px",right:"2px"}} className='badge bg-secondary position-absolute text-white rounded-circle p-2'>1</span>
                                        <img className='img-fluid' src={watch} alt="Product" />
                                    </div>
                                    <div className="">
                                        <h5 className="total-price">Apple Watch</h5>
                                        <p className="total-price">asddsa</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5  className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='total'>SubTotal:</p>
                                <p className='total-price'>$ 100</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='mb-0 total'>Shipping:</p>
                                <p className='mb-0 total-price'>$ 100</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className='total'>Total:</h4>
                            <h5 className='total-price'>$ 100</h5>
                        </div> 
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Checkout;
