import React from 'react';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import FeaturedProducts from '../../components/featured-products/FeaturedProducts';
import Slider from '../../components/slider/Slider';

import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='featured' />
      <Categories />
      <FeaturedProducts type='trending' />
      <Contact />
    </div>
  );
};

export default Home;
