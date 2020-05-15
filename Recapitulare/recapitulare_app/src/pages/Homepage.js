import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import Description from '../components/Description';
import ImageBlock from '../components/ImageBlock';

function Homepage() {
    return (
        <div>
            <Header />
            <MainCarousel />
            <Description />
            <ImageBlock />
            <ImageBlock />
            <ImageBlock />
        </div>
    );
}

export default Homepage;