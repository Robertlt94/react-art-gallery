import React from 'react';
import './MorePage.css';
import { useParams } from 'react-router-dom';

const MorePage = ({ paintings }) => {
    const {id} = useParams();

    // const selectedArt = paintings.map(painting => painting.id === id );
    console.log( id );
    console.log( paintings );
    
    let painting = paintings.filter(p => p.id == id );
    console.log(painting)

    return (
        paintings.map(art=>{
            if(art.id == id) {
                return (
                    <div>
                        <img src={art.image} />
                        <h1>{art.name}</h1>
                        <h2>{art.artist}</h2>
                        <p>{art.description}</p>
                    </div>
                )
        }})
    );
};

export default MorePage;