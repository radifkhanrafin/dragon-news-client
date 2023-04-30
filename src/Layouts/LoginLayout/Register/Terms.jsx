import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-50 mx-auto'>
            <h4>Our Terms And condition</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex numquam quia officia excepturi facilis sit ullam adipisci consequuntur maiores.</p>
            <p>back to <Link to='/register'>Register</Link></p> 
        </div>
    );
};

export default Terms;