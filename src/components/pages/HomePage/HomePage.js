import React from 'react';
import './HomePage.css';

const HomePage = () => {

    return (
        <div>
            <div id='background1'>
                <p id="welcome-text">Welcome</p>
                <p id="to-text">to</p>
                <div id='home-image-container1'>
                    <img src="https://d7hftxdivxxvm.cloudfront.net/?height=630&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FjFRQIuq-rvF5DDoU0oMpvQ%2Flarger.jpg&width=1200" />
                    <p id='inspiration-text'>inspiration</p>
                </div>
            </div>
            <div id='background2'>
                <div id='home-image-container2'>
                    <img src="https://www.nevadaart.org/wp-content/uploads/2023/09/Untitled-design-66-768x432.jpg" />
                    <p id="creativity-text">creativity</p>
                </div>
            </div>
            <div id='background3'>
                <div id='home-image-container3'>
                    <img src="https://blog.yourdesignjuice.com/wp-content/uploads/2019/03/dg-digitalartillustraton-aug2016new.jpg" />
                    <p id="and-text">and</p>
                    <p id="perspective-text">perspective</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;