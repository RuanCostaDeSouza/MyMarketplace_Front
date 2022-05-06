import { Box }           from "../components/BoxComponents/BoxFormComponent";
import { Link }          from "../components/utils/LinkComponent";
import { toast }         from "react-toastify";
import { Button }        from "../components/utils/ButtonComponent";
import { useState }      from "react";
import { Container }     from "../components/utils/ContainerComponent";
import { Partition }     from "../components/utils/PartitionComponent";
import { TitleText }     from "../components/utils/TitleTextComponent";
import { useNavigate }   from "react-router-dom";
import { StandardInput } from "../components/utils/InputComponent";
import api               from "../service/Api";
import React             from "react";
import ReactTooltip      from "react-tooltip";
import HeaderComponent   from "../components/utils/HeaderComponent";

export default function SignUp() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [typePassword,setTypePassword]= useState('password');

    const handlechangePasswordPresentation = (event)=>{

        if(typePassword == 'password'){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }
    }

    const handleSubmit =  (event) => {

        event.preventDefault();
        if(password !== confirm){
            toast.warn("Passwords do not match");
            return;
        }
    
        if(name == " "||password == " "|| email == " "){
            toast.warn("Fill in all fields");
            return;
        }
        if(password.length < 8){
            toast.warn("Check the password");
            return;
        }
        const payload = {
            name,
            email,
            password,
        }
         api.post('/api/create/user', payload).then( () => {
            toast.success('Registration completed successfully!');
            navigate('/signin');

        }).catch((erro)=>{
            if(erro){
                console.log(erro);
                toast.error('Email already exists!');
            } 
        })
      }
    return (
        <>
            <HeaderComponent/>
            <Container>
                <ReactTooltip effect="solid" delayHide={10} eventOff="true" place="left" />
                <Box onSubmit={handleSubmit}>
                    <TitleText>Register</TitleText>
                    <StandardInput placeholder="name" type="text" onChange={({target})=>setName(target.value)} required/>
                    <StandardInput placeholder="Email" type="email" onChange={({target})=>setEmail(target.value)} required/>
                    <StandardInput placeholder="Password" type= {typePassword} onChange={({target})=>setPassword(target.value)} required data-tip="minimum of 8 characters" />
                    <StandardInput placeholder="Confirm" type= {typePassword} onChange={({target})=>setConfirm(target.value)} required/>
                    <Partition>
                        <span><input type="checkbox" name="typePassword" onChange={handlechangePasswordPresentation}/><label htmlFor="typePassword">Show Password?</label></span>
                        <span><p>Already have an account?<Link href="/signin"> Sign in</Link></p></span>
                    </Partition>
                    <Button>Submit</Button>
                </Box>
            </Container>
        </>
    )
}