import react from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Cadastro(){
    const navigate = useNavigate();
    const [dadosCadastro, setDadosCadastro] = useState({email:"",senha:"",nome:"",foto:""});

    function confirmarCadastro(event){
        event.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        
        const promise = axios.post(URL, {
            email: dadosCadastro.email,
            name: dadosCadastro.nome,
            image: dadosCadastro.foto,
            password: dadosCadastro.senha     
        });

        promise.then((response) => {
            console.log("Sucesso");
            navigate("/");
        });

        promise.catch(erro => alert(erro.response.statusText));
    }
    function irParaLogin(){
        navigate("/");
    }
    
    
    return(
        <TelaEntrar>
            <img className="logo" src={logo}/>  
            <form onSubmit={confirmarCadastro}>
                <input className="input" type="email" placeholder="email" value={dadosCadastro.email} required onChange={e => setDadosCadastro({ ...dadosCadastro, email: e.target.value})}/>
                <input className="input" type="password" placeholder="senha" value={dadosCadastro.senha} required onChange={e => setDadosCadastro({ ...dadosCadastro, senha: e.target.value})}/>
                <input className="input" type="text" placeholder="nome" value={dadosCadastro.nome} required onChange={e => setDadosCadastro({ ...dadosCadastro, nome: e.target.value})}/>
                <input className="input" type="url" placeholder="foto" value={dadosCadastro.foto} required onChange={e => setDadosCadastro({ ...dadosCadastro, foto: e.target.value})}/>
                <button type="submit">Cadastrar</button>
                <p onClick={irParaLogin}>Já tem uma conta? Faça login!</p>
            </form>   
        </TelaEntrar>
    )
}
export default Cadastro;

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
    .input{
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