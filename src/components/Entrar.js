import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import UserContext from '../context/UserContext';
import { useContext } from "react";
import { ThreeDots } from  'react-loader-spinner';


function Entrar(){
    const navigate = useNavigate();
    const [dadosLogin, setDadosLogin] = useState({email:"",senha:""});
    const {usuario, setUsuario} = useContext(UserContext);
    const [carregandoDados, setCarregandoDados] = useState({carregando: false, classeCarregando:""});

    function confirmarLogin(event){
        event.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        
        const promise = axios.post(URL, {
            email: dadosLogin.email,
            password: dadosLogin.senha     
        });

        promise.then((response) => {
            localStorage.setItem("userdata", JSON.stringify({
                name: response.data.name,
                image: response.data.image,
                email: response.data.email,
                token: response.data.token
            }));
            
            setUsuario({...usuario, email: response.data.email, name: response.data.name, image: response.data.image, token: response.data.token});
            navigate('/hoje');       
        });

        setCarregandoDados({...carregandoDados, carregando: true, classeCarregando: "desabilita"});

        promise.catch((erro) => {
            alert(erro.response.statusText);
            setCarregandoDados({...carregandoDados, carregando: false, classeCarregando: ""});
        });
    }

    function irParaCadastro(){
        navigate("/cadastro");
    }

    return (
        <TelaEntrar>
            <img className="logo" src={logo}/>  
            <form onSubmit={confirmarLogin}>
                <input type="email" placeholder="email" className={carregandoDados.classeCarregando} disabled={carregandoDados.carregando} value={dadosLogin.email} required onChange={e => setDadosLogin({ ...dadosLogin, email: e.target.value})}/>
                <input  type="password" placeholder="senha" className={carregandoDados.classeCarregando} disabled={carregandoDados.carregando} value={dadosLogin.senha} required onChange={e => setDadosLogin({ ...dadosLogin, senha: e.target.value})}/>
                {carregandoDados.carregando === false
                ? <button type="submit">Entrar</button> 
                : <button disabled>
                    <ThreeDots color="rgba(255, 255, 255, 1)" height={13} width={51}/>
                </button> 
                }
                <p onClick={irParaCadastro}>Não tem uma conta? Cadastre-se!</p>
            </form>   
        </TelaEntrar>
    )

}
export default Entrar;

const TelaEntrar = styled.div`
    .logo{
        margin-left: 97px;
        margin-top: 150px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
    }
    input{
        width: 303px;
        height: 45px;
        margin-left: 30px;
        margin-bottom: 8px;
        padding-left: 10px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    .desabilita{
        background-color: rgba(212, 212, 212, 1);
        color: rgba(175, 175, 175, 1);
    }
    button{
        width: 318px;
        height: 45px;
        margin-left: 30px;
        margin-top: 3px;
        border: 0px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
    p{
        width: 232px;
        height: 17px;
        margin-left: 74px;
        margin-top: 30px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`