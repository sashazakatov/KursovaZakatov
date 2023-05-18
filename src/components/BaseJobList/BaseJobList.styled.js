import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`

export const Item = styled.li`
    display: flex;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14), 0px 2px 1px rgba(0,0,0,.2);
    border-radius: 4px;
    text-align: center;
    padding: 30px 15px;
    width: 470px;
    justify-content: space-between;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`