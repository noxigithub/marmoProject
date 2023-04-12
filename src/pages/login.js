import React, { useRef, useContext } from 'react';
import axios from 'axios';
import Navbar from './navBar.js';
import { LoginContext } from '../helpers/context';
import { useNavigate } from 'react-router-dom';







const LoginForm = (props) => {
    const navigate = useNavigate();
    const {connected,setConnected} = useContext(LoginContext);

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            'type':'login',
            'user': refUsuario.current.value,
            'pass': refClave.current.value
        };

        try {
            const res = await axios.post("http://localhost/marmoProject/backend/userController.php", loginData);
            if(res.data == "loggedIn"){
                console.log(res.data);

              setConnected(true);
              navigate('/');
              
            }
        } catch (err) {
            console.log('error in the login' + err);
        }

        console.log(loginData);
    }
    return (

        <div>
            < Navbar />

            <div className='col-12'>
                <div className="form-container col-8 offset-2">
                    <img alt='logo' />
                    <h1 className="title">Login</h1>

                    <form >
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                ref={refUsuario} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                ref={refClave} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default LoginForm;

