import React from 'react';
import './MorePage.css';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MorePage = ({ paintings }) => {
    const {id} = useParams();

    return (
        paintings.map(art=>{
            if(art.id == id) {
                return (
                    <ArtContainer>
                        <Artwork src={art.image} />
                        <Name>{art.name}</Name>
                        <Artist>{art.artist}</Artist>
                        <Description>{art.description}</Description>
                    </ArtContainer>
                )
        }})
    );
};

export default MorePage;

const ArtContainer = styled.div`
    background-color: #000;
    height: 90vh;
    color: #fff;
    text-align: center;
    overflow: hidden;
    overflow-Y: scroll;
    padding: 5vh 10vw;
`

const Artwork = styled.img`
    margin: 3vh auto;
    box-shadow: 0 0 20px 5px #fff;
`

const Name = styled.h1`
    margin-bottom: 1rem;
`

const Artist = styled.h2`
    margin-bottom: 1rem;
`

const Description = styled.p`
    font-size: 2rem;
    margin-bottom: 5vh;
`