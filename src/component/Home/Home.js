import React from 'react';
import './Home.css'
import Banner from '../Header/Banner/Banner';
import Service from '../Service/Service';
import Review from '../Review/Review';

const Home = () => {
    const handleBook = () => {
        console.log('clicked')
    }
    return (
        <div className='header-full'>
            <Banner></Banner>
            {/* Service */}
            <Service></Service>
            <Review></Review>
        </div>
    );
};

export default Home;