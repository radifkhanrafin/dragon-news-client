/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../Provaiders/AuthProvaider/AuthProvaider';
const Header = () => {
   
    return (
        <Container>
            <div className='text-center mt-3'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-bold'>{moment().format('dddd ,MMMM, D, YYYY')}</p>
            </div>
            <div className='d-flex gap-2'>
                <Button variant="danger">Leatest</Button>
                <Marquee speed={20}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
          
        </Container>
    );
};

export default Header;