import React from 'react';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
    return (
        <div style={{background:"#ffd333",minHeight:"100vh"}} className='py-5'>
            <br /><br /><br /><br /><br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className='text-center'>Forgot Password</h3>
                <p className='text-center'>Forgot Password to your account to continue</p>
                <form action="">
                    <CustomInput 
                        type="text" 
                        label='Email address...' 
                        i_id ="email" />
                    <button 
                        className='border-0 px-3 py-2 text-white fw-bold w-100' 
                        type='submit' 
                        style={{background:"#ffd333"}}
                    >
                        Send Link
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Forgotpassword;
