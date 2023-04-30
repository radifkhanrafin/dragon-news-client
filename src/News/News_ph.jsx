import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Editorinside from './EditorInsides/Editorinside';

const News_ph = () => {
    const news = useLoaderData()
    const { author, category_id, details, image_url, others_info, rating, thumbnail_url
        , title, total_view, _id } = news
    console.log(news)
    return (
        <div className='p-2'>
            <h4>Dragon News</h4>
            <Card className='p-2' style={{ width: 'auto' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className='btn btn-danger  ' to={`/categoty/${category_id}`}> <FaArrowLeft />ALL News In This Category</Link>
                </Card.Body>
            </Card>
            <Editorinside></Editorinside>
        </div>


    );
};

export default News_ph;