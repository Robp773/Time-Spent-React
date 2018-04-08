import React from 'react';
import './Login.css';

export default class Login extends React.Component{
    render(){
        return(
            <div id='login'>
                <button className='loginBtn'>Login</button>
                <button className='loginBtn'>Log Out</button>
            </div>
        )
    }
}