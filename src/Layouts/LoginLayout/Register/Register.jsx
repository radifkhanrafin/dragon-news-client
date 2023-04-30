import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaiders/AuthProvaider/AuthProvaider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted , setaccepted]=useState(false)

    const handleFormInfo = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo_url.value;
        console.log(password, email, name)

        createUser(email , password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleAccepted=event=>{
        setaccepted(event.target.checked)
    }
    

    return (
        <Container>
            <h3 className='text-center'>Register your account</h3>
            <Form onSubmit={handleFormInfo} className='w-50 mx-auto'>
                <Form.Group className="mb-3" >
                    <Form.Label >Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Photo Url</Form.Label>
                    <Form.Control name='photo_url' type="text" placeholder="Enter your Photo url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                    {/* <button onClick={()=>{setShowPass(!showPass)}}>{showPass ? 'Show' : 'Hide'}</button> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleAccepted}
                     type="checkbox"
                      name='check' 
                      label={<>Accept <Link to='/terms'>Term & Conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" className='w-100' disabled={!accepted} type="submit">
                   Register
                </Button>
                <p>Already Have An Account ?<Link className='text-danger' to='/login'> Login </Link> </p>
            </Form>
        </Container>
    );
};

export default Register;