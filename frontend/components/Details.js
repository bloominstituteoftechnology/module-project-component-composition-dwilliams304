import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes` 100% {
    opacity: 1;
}`

const StyledDiv = styled.div`
    opacity: 0;
    animation: ${kf} 0.5s ease-in-out forwards;

    h2{
        color: ${pr => pr.theme.primaryColor};
        text-align: center;
        border-bottom: ${pr => pr.theme.primaryColor} 2px solid;
        padding 4px;
        margin-bottom: 10px;
    }

    p{
        color: ${pr => pr.theme.white};
        text-align: left;
    }

    img{
        display: block;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        align-self: center;

        border: ${pr => pr.theme.primaryColor} solid 1px;
        border-radius: 20px;
    }
`;


function Details(props) {

    const {title, description} = props;
    return(
        <StyledDiv>
            <img src={props.imgSrc}/>
            <h2 className='photo-title'>{ title }</h2>
            <p className='photo-description'>{ description }</p>
        </StyledDiv>
    )
}

export default Details