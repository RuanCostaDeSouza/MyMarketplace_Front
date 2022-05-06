import styled from "styled-components";

export const CardProduct = styled.div`
    width: 12.5rem;
    height: 21.8rem;
    margin: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 1px 5px 17px -1px #38383870;
    font-family: 'Montserrat';
    border: 4px solid transparent;
    transition: 500ms ease-in-out;
    &:hover{
        border: 4px solid #5d5d5d;
    }
`