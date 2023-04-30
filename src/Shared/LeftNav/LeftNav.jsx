/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editorinside from '../../News/EditorInsides/Editorinside';

const LeftNav = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            //    .then(data=>console.log(data))
            .then(data => setCategoris(data))
            .catch(error => console.log(error))

    }, []);

    return (
        <div className='position-sticky top-0 mt-3'>
            <h4 className='mb-3'>All Category</h4>
            <div className='ps-3'>
                {
                    categoris.map(categoty => <p
                        key={categoty.id}
                    >
                        <Link to={`/categoty/${categoty.id}`} className='text-decoration-none text-dark'>{categoty.name}</Link>
                    </p>)
                }
            </div>
            <Editorinside></Editorinside>
        </div>
    );
};

export default LeftNav;