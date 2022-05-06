import { Box }           from "../components/BoxComponents/BoxFormComponent";
import { Link }          from "../components/utils/LinkComponent";
import { toast }         from "react-toastify";
import { Button }        from "../components/utils/ButtonComponent";
import { useAuth }       from "../hooks/Auth";
import { useState }      from "react";
import { Container }     from "../components/utils/ContainerComponent";
import { Partition }     from "../components/utils/PartitionComponent";
import { TitleText }     from "../components/utils/TitleTextComponent";
import { StandardInput } from "../components/utils/InputComponent";
import api               from "../service/Api";
import jwt               from "jwt-decode";
import React             from "react";
import HeaderComponent   from "../components/utils/HeaderComponent";

export default function SignIn() {

    const { tokenSetter } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typePassword,setTypePassword]= useState('password');

    const handlechangePasswordPresentation = (event)=>{

        if(typePassword == 'password'){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const payload = {
            email,
            password
        }

        await api.post('/api/signin/user', payload).then(async (response) => {
            tokenSetter(response.data.token);
            
            const decodedToken = jwt(response.data.token);
            const date = new Date();
            
            date.setTime(date.getTime() + decodedToken.exp);
            document.cookie = 'token =' + response.data.token + ';expires=' + date.toGMTString() + '; SameSite=Strict; Secure; ';
            
            if(response.status == 200){
            toast.success("successfully logged in!");
            }

        }).catch((erro)=>{
            console.log(erro);
            toast.error("invalid credentials!");
        });
      }
    return (
        <>
            <HeaderComponent/>
            <Container>
                <Box onSubmit={handleSubmit}>
                    <TitleText>Sign In</TitleText>
                    <StandardInput placeholder="Email" type="email" onChange={({target})=>setEmail(target.value)} required/>
                    <StandardInput placeholder="Password" type={typePassword} onChange={({target})=>setPassword(target.value)} required/>
                    <Partition>
                        <span><input type="checkbox" name="typePassword" onChange={handlechangePasswordPresentation}/><label htmlFor="typePassword">Show Password?</label></span>
                        <span><p>Don't have an account?<Link href="/signup"> Sign up</Link></p></span>
                    </Partition>
                    <Button>Sign in</Button>
                </Box>
            </Container>
        </>
    );
}