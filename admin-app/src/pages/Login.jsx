import React from 'react';
import CustomInput from '../components/CustomInput';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div style={{background:"#ffd333",minHeight:"100vh"}} className='py-5'>
            <br /><br /><br /><br /><br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className='text-center title'>LOGIN</h3>
                <p className='text-center'>Login to your account to continue</p>
                <form action="">
                    <CustomInput 
                        type="text" 
                        label='Email address...' 
                        i_id ="email" />
                    <CustomInput 
                        type="password" 
                        label='Password...' 
                        i_id ="pass" />
                    <div className="mb-3 text-end">
                        <Link 
                            to='/forgot-password' 
                            className=''
                        >
                            Forgot Password
                        </Link>
                    </div>
                    <Link 
                        to='/admin'
                        className='border-0 px-3 py-2 text-center text-decoration-none fs-5 text-white fw-bold w-100' 
                        type='submit' 
                        style={{background:"#ffd333"}}
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
