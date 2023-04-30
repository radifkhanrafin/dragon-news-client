import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import News from '../News/News';

const Categoty = () => {
    const{id}=useParams()
    const category=useLoaderData()
    return (
        <div className='text-center'>
            <h3>categoty :{category.length}</h3>
            {
                category.map(singleNews => <News
                    key={singleNews._id}
                    news={singleNews}
                ></News>)
            }
        </div>
    );
};

export default Categoty;