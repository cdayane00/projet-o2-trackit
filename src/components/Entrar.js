import react from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";


function Entrar(){

    return(
        <TelaEntrar>
            <img className="logo" src={logo}/>  
            <form>
                <input className="input" type="email" placeholder="email"/>
                <input className="input" type="password" placeholder="senha"/>
                <button type="submit">Entrar</button>
                <p>Não tem uma conta? Cadastre-se!</p>
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
        color: #DBDBDB;
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