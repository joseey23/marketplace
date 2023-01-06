import React from 'react'
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";
//import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <div className='home'>
            <Slider />

            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
            <FeaturedProducts type="fashion" />

        </div>
    )
}

export default Home
