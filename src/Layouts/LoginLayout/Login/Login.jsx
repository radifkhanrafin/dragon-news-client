import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaiders/AuthProvaider/AuthProvaider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

    console.log(error.message)
    // console.log(showPass)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const logedUser = result.user;
                setUser(logedUser)
                navigate(from , {replace:true})
                console.log(logedUser)
            })
            .catch(error => {
                setError(error)
                console.log(error.message)
            })
    }
    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    {/* <button onClick={()=>{setShowPass(!showPass)}}>{showPass ? 'Show' : 'Hide'}</button> */}
                </Form.Group>
                <p>{error && error.message}</p>

                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
                <p>Dont’t Have An Account ?<Link className='text-danger' to='/register'> Register </Link> </p>
            </Form>
        </Container>

    );
};

export default Login;