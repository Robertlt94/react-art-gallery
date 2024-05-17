import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ route, name, dated, artist, image, description }) => {

    return (
        <Wrapper to={route} >
            <ArtDisplay>
                <Painting src={image} />
            </ArtDisplay>
            <InfoSection>
                <HeaderText>{name} ({dated})</HeaderText>
                <SubText>{artist}</SubText>
                <Details>{description}</Details>
                <More>Learn More</More>
            </InfoSection>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled(Link)`
    overflow: hidden;
    color: #fff;
    padding: 5vh 5vw;
    &:hover,
    &:focus {
        box-shadow: 0 0 10px #fff;
    };
    &:active {
        box-shadow: 0 0 10px 10px #617eff;
    }
`


const ArtDisplay = styled.div`
    verticle-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
`

const Painting = styled.img`
    height: 30vh;
`

const InfoSection = styled.div`
    width: 30vw;
    color: #fff;
`

const HeaderText = styled.h1`
    font-size: 26px;
    text-align: center;
`

const SubText = styled.h2`
    font-size: 20px;
    text-align: center;
`

const Details = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
`

const More = styled.p`
    font-size: 20px;
    margin-top: 2rem;
    text-align: center;
    visibility: hidden;

    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
        visibility: visible;
        text-decoration: underline 1px #fff
    };
    ${Wrapper}:active & {
        font-weight: 1000;
        font-size: 24px;
        color: #617eff;
        text-decoration: underline 2px #617eff;
    }
`