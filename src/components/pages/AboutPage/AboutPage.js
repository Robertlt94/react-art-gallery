import React from 'react';
import './AboutPage.css';
import ConstructionIcon from '@mui/icons-material/Construction';

const AboutPage = () => {

    return (
        <div className='about-container'>
            <div className='page-under-construction'>
                <h1>Oops!</h1>
                <p>Sorry, this page is still under construction</p>
                <ConstructionIcon fontSize="large" />
            </div>
        </div>
    )
}

export default AboutPage;