import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch.jpg'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Meta title="Cart"/>
            <BreadCrumb title="Cart"/> 
            <Container class1="cart-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img src={watch} className='img-fluid' alt="product img" />
                                </div>
                                <div className="w-75">
                                    <p >watch</p>
                                    <p >Color: black</p>
                                    <p >Size: M</p>
                                </div>
                            </div>
                            <div className="cart-col-2 gap-15">
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className="cart-col-3 gap-15 d-flex align-items-center">
                                <div className="">
                                    <input type="number" name="" id="" min={1} />
                                </div>
                                <div className="">
                                    <MdDelete className='text-danger fs-5 '/>
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="total">Total : 4</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-2">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link className='button' to='/product'>Continue To Shopping</Link>
                            <div className="d-flex flex-column align-items-end">
                                <h4>SubTotal: $ 100</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link className='button' to='/checkout'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cart;
