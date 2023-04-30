/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
// ..
AOS.init();
const News = (singleNews) => {
    // const id=useParams()
    const [readNews, setReadNews] = useState(true)
    const { news } = singleNews
    const { author, category_id, details, image_url, others_info, rating, thumbnail_url
        , title, total_view, _id } = news
    // console.log(news)
    // console.log(author.name)
    return (
        <div>
            {/* <p>{news._id}</p> */}

            <Card data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="text-center my-5">
                <Card.Header className='d-flex justify-content-between  align-items-center gap-3'>
                    <div className='d-flex  align-items-center gap-3'>
                        <Image style={{ width: '60px' }} src={author.img} roundedCircle />
                        <div className=''>
                            <p className='mb-0'>{author.name}</p>
                            <p>{moment(author.published_date).format('yyy-MMM-D')}</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center gap-3'>
                        <p><FaRegBookmark /></p>
                        <p><FaShareAlt /></p>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title className='my-2'> {title} </Card.Title>
                    <Image style={{ width: '600px', height: '350px' }} src={image_url} rounded />

                    <Card.Text className='mt-4 '>
                        <span>{readNews ? <span className='opacity-50'>{details.slice(1, 200)}...</span> : details}</span>

                        <button className='btn text-danger fw-bold' onClick={() => { setReadNews(!readNews) }}>{readNews ? "Read more" : "Read Less"}</button>
                        <p> <Link  to={`/news/${_id}`}>Show Details</Link></p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between  border align-items-center' >
                        <p className='d-flex gap-2 '>
                            <Rating className='text-warning'
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                            <p className='fw-bold'>{rating.number}</p>
                        </p>
                        <p className='d-flex gap-2'>
                            <p><FaEye /></p>
                            <p>{total_view}</p>
                        </p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;