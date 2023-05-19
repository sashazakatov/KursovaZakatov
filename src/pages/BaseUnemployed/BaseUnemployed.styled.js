import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Button = styled.button`
    height: 28px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: orangered;

    &:hover {
        background-color: #ff652d;
    }
`