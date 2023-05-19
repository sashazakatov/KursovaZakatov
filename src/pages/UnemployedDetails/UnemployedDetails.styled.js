import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 500;
    width: 95px;
    margin-bottom: 30px;

    &.active {
        color: white;
        background-color: orangered;
    }
    &:hover.active{
        background-color: #ff652d;
    }
` 

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`