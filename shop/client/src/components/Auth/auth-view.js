import React from 'react'
import Login from './login/login-connected'
import Register from './register/register-connected'

export const Auth = () => {

    return(
        <div className="d-flex flex-row justify-content-between pt-5 mt-5 pb-5" > 
            
            <div className="d-flex flex-column justify-content-center pt-5" style={{width: '50vw', borderRight: '1px solid #5559', border: '1px solid red'}}>
                <h1 className=" text-center">Login</h1>
                <div className="align-self-center pt-5 align-self-center" style={{width: '50vw',  height: '80%', border: '1px dashed red'}}>
                    <Login />
                </div>

            </div>


            <div className="d-flex flex-column justify-content-center pt-5" style={{width: '50vw', border: '1px solid purple'}}>
                <h1 className="text-center">Register</h1>
                <div className="align-self-center pt-5 align-self-center" style={{width: '50vw', height: '80%', border: '1px dashed purple'}}>
                    <Register />
                </div>
            </div>
        </div>
    )
}