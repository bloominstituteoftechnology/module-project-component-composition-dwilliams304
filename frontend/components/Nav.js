import React from "react";
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
    100%{
        scale: 1;
    }
`;
const StyledNav = styled.nav`
    background-color: ${pr => pr.theme.primaryColor};
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;
    scale: 0;
    animation: ${kf} 0.2s ease-in-out forwards;

    button {
        padding: 5px;
        margin-right: 20px;
        margin-left: 20px;
        border: ${pr => pr.theme.black} solid 1px;
        background-color: rgba(0, 0, 0, 0);
        color: ${pr => pr.theme.black};
        border-radius: 0px;

        &:hover{
            transition: 0.2s ease-in-out;
            transform: scale(1.3);
            background-color: ${pr => pr.theme.black};
            color: ${pr => pr.theme.primaryColor};
            border-radius: 10px;
        }
    }

    h2{
        color: ${pr => pr.theme.black};
    }
`;

function Nav (props) {
    
    return (
        <StyledNav>
            <button onClick={props.randomDate} className="nav-btn nav-right">Random Date</button>
            <h2>{props.date}</h2>
            <button onClick={props.openGitHub} className="nav-btn nav-right">Github</button>
        </StyledNav>
    )
}

export default Nav