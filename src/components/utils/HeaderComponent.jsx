import { toast }   from "react-toastify";
import { useAuth } from "../../hooks/Auth";
import React       from "react";
import styled      from "styled-components";
import LogoHeader  from "../../public/img/Logo.png";

const HeaderContainer = styled.div`
    width: 100%;
    height: 5.7rem;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderBar = styled.div`
    width: 100%;
    max-width: 75rem;
    height: 5.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 2rem;
    a img{
        height: 100%;
        width: auto;
    }
    a{
        text-decoration: none;
        font-family:'Montserrat' ;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
`


export default function HeaderComponent() {
    const { tokenSetter, token, user } = useAuth();
    const handleLogout = () => {
  
        document.cookie = `token=${token}; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
  
        tokenSetter();
        toast.warn("Volte sempre");
      
      
  }
    return (
        <>
            {
                user?
                <HeaderContainer>
                    <HeaderBar>
                        <a href="/"><img src={LogoHeader} /></a>
                        <a onClick={handleLogout}>Log out</a>
                    </HeaderBar>
                </HeaderContainer>
                :
                <HeaderContainer>
                    <HeaderBar>
                        <a href="/"><img src={LogoHeader} /></a>
                    </HeaderBar>
                </HeaderContainer>
            }
        </>
    )
}
