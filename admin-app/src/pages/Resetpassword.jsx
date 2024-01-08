import React from 'react';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
    return (
        <div style={{background:"#ffd333",minHeight:"100vh"}} className='py-5'>
            <br /><br /><br /><br /><br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className='text-center'>Reset Password</h3>
                <p className='text-center'>Please Enter Your new Password</p>
                <form action="">
                    <CustomInput 
                        type="password" 
                        label='New Password...' 
                        i_id ="pass" />
                    <CustomInput 
                        type="password" 
                        label='Confirm Password...' 
                        i_id ="pass" />
                    <button 
                        className='border-0 px-3 py-2 text-white fw-bold w-100' 
                        type='submit' 
                        style={{background:"#ffd333"}}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Resetpassword;
