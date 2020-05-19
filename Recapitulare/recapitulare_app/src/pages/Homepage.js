import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import Description from '../components/Description';
import ImageBlock from '../components/ImageBlock';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <MainCarousel />
            <div className="container">
                <ImageBlock img="/images/pila.jpg" weapon_name="Pila" className="size-33"/>
                <ImageBlock img="/images/gladius.jpg" weapon_name="Gladius" className="size-33"/>
                <ImageBlock img="/images/scutum.jpg" weapon_name="Scutum" className="size-33"/>
                <ImageBlock img="/images/pila.jpg" weapon_name="Pila" className="size-33"/>
                <ImageBlock img="/images/pila.jpg" weapon_name="Pila" className="size-33"/>
                <ImageBlock img="/images/pila.jpg" weapon_name="Pila" className="size-33" />  
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;