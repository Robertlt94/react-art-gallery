import React from 'react';
import './HomePage.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';

const HomePage = () => {

    return (
        <div>
            <HomeHeader />
            <h1>Test: You are home.</h1>
        </div>
    )
}

export default HomePage;