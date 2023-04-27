/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const News = (singleNews) => {
    const [readNews, setReadNews] = useState(true)
    const { news } = singleNews
    const { author, category_id, details, image_url, others_info, rating, thumbnail_url
        , title, total_view, _id } = news
    console.log(news)
    // console.log(author.name)
    return (
        <div>
            {/* <p>{news._id}</p> */}

            <Card data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="text-center my-5">
                <Card.Header>
                    <div className='d-flex  align-items-center gap-3'>
                        <Image style={{ width: '60px' }} src={author.img} roundedCircle />
                        <div className=''>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date && author.published_date.slice(0, 11)}</p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='my-2'> {title} </Card.Title>
                    <Image style={{ width: '600px', height: '350px' }} src={thumbnail_url} rounded />

                    <Card.Text className='mt-4'>
                        <span>{readNews ? <span className='opacity-50'>{details.slice(1, 200)}</span> : details}</span>

                        <button className='btn text-danger fw-bold' onClick={() => { setReadNews(!readNews) }}>{readNews ? "Read more" : "Read Less"}</button>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default News;