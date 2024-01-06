import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgotPassWord = () => {
    return (
        <>
            <Meta title="Forgot PassWord"/>
            <BreadCrumb title="Forgot PassWord"/>

            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Reset Your Password</h3>
                                <p className='text-center my-2 mb-3'>We will send you an email to reset your password</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div className="">
                                        <input 
                                            type="email" 
                                            name='email' 
                                            placeholder='Enter Email ...' 
                                            className="form-control" />
                                    </div>
                                    <div className="">
                                        <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                            <button className='button border-0'>Submit</button>
                                            <Link to='/login'>
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassWord;
