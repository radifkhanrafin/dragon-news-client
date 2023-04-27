/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import News from '../News/News';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const MainContent = () => {
    const [news, setNews] = useState([])
    const [allNews, setAllNews] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    // console.log(allNews)
    return (
        <div>
            {
                allNews ? <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1300">
                    {
                        news.slice(0, 5).map(singleNews => <News
                            key={singleNews._id}
                            news={singleNews}
                        ></News>)
                    }
                </div> :
                    <div>
                        {
                            news.map(singleNews => <News
                                key={singleNews._id}
                                news={singleNews}
                            ></News>)
                        }
                    </div>
            }
            <button onClick={() => { setAllNews(!allNews) }}>
                {
                    allNews ? 'see more' : 'see less'
                }
            </button>
        </div>
    );
};

export default MainContent;