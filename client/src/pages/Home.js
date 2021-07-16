import React from 'react'
import HeroDescription from '../components/HeroSection/HeroDescription';
import Hero from '../components/HeroSection/Hero';
import Features from '../components/Features/Features';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroDescription />
            <Features />
        </div>
    )
}

export default Home;
