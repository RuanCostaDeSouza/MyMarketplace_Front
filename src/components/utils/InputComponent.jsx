import styled from "styled-components";

export const StandardInput = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    width: 89%;
    height: 3rem;
    font-family: 'Montserrat';
    border-radius:30px;
    background-color: transparent;
    color: #000;
    font-size: 18px;
    padding-left: 2rem;
    margin: 0.7rem 0rem;
    &:focus{
        outline: 1px solid #877692 ;
    }
`