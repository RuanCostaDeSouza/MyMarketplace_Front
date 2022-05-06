import styled from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    border-radius: 60px;
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    font-family: 'Montserrat';
    font-weight: 500;
    box-shadow: 0px;
    padding:0rem 0.5rem;
    color: #5d5d5d;
    border: 1px solid #2d2d2d ;
    cursor: pointer;
    &:hover{
        box-shadow: 1px 5px 17px -1px #38383870;
        border: 1px solid #877692 ;
        color: #877692;
    }
`