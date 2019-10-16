import React, { useState }from 'react';
import axios from 'axios'
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [auth, setAuth] = useState({username:'', password:''});

    const handleChanges = e => {
        setAuth({
            ...auth,
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/login', auth)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err => console.log('Check login information', err.response));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='username' placeholder='Enter Username...' value={auth.username} onChange={handleChanges} />
                <input type='password' name='password' placeholder='Enter Password...' value={auth.password} onChange={handleChanges} />
                <button>Login</button> 
            </form>
        </div>
    )
}   

export default Login;
