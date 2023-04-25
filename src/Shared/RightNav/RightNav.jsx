/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGofore, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='d-block mb-3 w-100' variant="outline-primary">  <FaGofore />Primary</Button>
            <Button className='d-block  w-100' variant="outline-secondary"><FaGithub /> Secondary</Button>

            <div className='my-3 py-3'>
                <h3>Find Us On</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item > <span className='text-primary '><FaFacebook /></span> Facebook</ListGroup.Item>
                    <ListGroup.Item><span className='text-danger '><FaInstagram /></span>  Instagram</ListGroup.Item>
                    <ListGroup.Item><span className='text-primary '><FaTwitter />Twitter</span> </ListGroup.Item>
                </ListGroup>
            </div>
            <div className='my-3'>
                <QZone></QZone>
            </div>
            <div>
                <img src="" alt="" />
            </div>

        </div>
    );
};

export default RightNav;