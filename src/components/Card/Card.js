import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ route, name, dated, artist, image, description }) => {

    return (
        <Wrapper to={route} >
            <ArtDisplay>
                <img src={image} />
            </ArtDisplay>
            <InfoSection>
                <h1>{name} ({dated})</h1>
                <h2>{artist}</h2>
                <Details>{description}</Details>
            </InfoSection>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled(Link)`
    height: 40vh;
    width: max-content;
    display: flex;
`
const ArtDisplay = styled.div`
    verticle-align: middle;
    width: max-content;
`

const Painting = styled.img`

`

const InfoSection = styled.div`
    height: max-content;
    width: 30vw;
    overflow: hidden;
    color: #000;
`

const HeaderText = styled.h1`

`

const SubText = styled.h2`

`

const Details = styled.p`

`