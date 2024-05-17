import React from 'react';
import './ContactPage.css';
import ConstructionIcon from '@mui/icons-material/Construction';


const ContactPage = () => {

    return (
        <div className='contact-container'>
            <div className='page-under-construction'>
                <h1>Oops!</h1>
                <p>Sorry, this page is still under construction</p>
                <ConstructionIcon fontSize="large" />
            </div>
        </div>
    )
}

export default ContactPage;