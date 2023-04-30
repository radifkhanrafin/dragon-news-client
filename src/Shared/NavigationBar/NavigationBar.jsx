import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provaiders/AuthProvaider/AuthProvaider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { user , logOut} = useContext(AuthContext)
    console.log(user)

    const handleLogOut=()=>{
        logOut()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Container className=' my-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex gap-3">
                            <Link className='text-dark text-decoration-none' to='/'>Home</Link>
                            <Link className='text-dark text-decoration-none' >About</Link>
                            <Link className='text-dark text-decoration-none'>Career</Link>

                        </Nav>
                        <Nav className='d-flex align-items-center gap-3'>
                            {
                                user &&
                                <Link Link className='text-dark' href="#deets"><FaUserCircle style={{ fontSize: '2rem' }} /></Link>
                            }
                            <Link eventKey={2} href="#memes">
                                {user ?
                                    <Link > <Button onClick={handleLogOut} variant="danger">Log out</Button> </Link> :
                                    <Link to='/login'> <Button variant="danger">Log In</Button> </Link>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;