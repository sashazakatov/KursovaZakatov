import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px;
    gap: 10px;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    font-size: 16px;
`

export const Input = styled.input`
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border-color: black;
    font-weight: 500;
    height: 16px;
    width: 325px;
`

export const Textarea = styled.textarea`
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border-color: black;
    font-weight: 500;
    width: 325px;
`

export const Submit = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    background-color: orangered;
    border: none;

    &:hover{
        background-color: #ff652d;
    }
` 