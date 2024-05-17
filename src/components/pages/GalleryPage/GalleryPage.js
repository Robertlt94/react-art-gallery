import React from 'react';
import './GalleryPage.css';
import Card from '../../Card/Card';

const GalleryPage = ({paintings}) => {

    return (
        <div className='gallery-container'>
            {paintings.map((art, index) => {
                return (
                    <Card key={index} route={`/gallery/${art.id}`} name={art.name} dated={art.dated} artist={art.artist} image={art.image} description={art.description}/>
            )})}
        </div>
    )
}

export default GalleryPage;