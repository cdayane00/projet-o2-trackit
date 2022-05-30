import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";
import UserContext from '../context/UserContext';
import { useContext } from "react";
import { ThreeDots } from  'react-loader-spinner';

function CriaHabito({criaFormHabito, setCriaFormHabito, listaHabito}){
    const [seleciona, setSeleciona] = useState(false);
    const [habito, setHabito] = useState({nome: "", dia: []});
    const diasDaSemana = ["D","S","T","Q","Q","S","S"];
    const [carregando, setCarregando] = useState(false);
    const {usuario} = useContext(UserContext);

    function cria(event){
        event.preventDefault();

        if(habito.dia.length > 0){
            setCarregando(true);
        }
        else{
            alert("Selecione um dia da semana");
            return;
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const corpo = {...habito};
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`,
            },
        };
        const promise = axios.post(URL, corpo, config);
        promise.then((response)=>{
            listaHabito();
            setCriaFormHabito(false);
            setCarregando(false);
            setHabito({nome:"", dia: []});
        });
        promise.catch((erro)=>{
            alert(erro.response.statusText);
            setCarregando(false);
        });
    }

    function selecionaDiasDaSemana(dia){
        setSeleciona(!seleciona);
        if(habito.dia.includes(dia)){
            setHabito({...habito, dia: habito.dia.filter((d)=> d != dia)});
        }
        else{
            setHabito({...habito, dia: [...habito.dia, dia]});
        }
    }

    return criaFormHabito === true ?(
        <CriaFormHabito onSubmit={cria}>
            <input className="input" type="text" placeholder="nome do hábito" value={habito.name} onChange={(event) => setHabito({...habito, nome: event.target.value})}/>
            <Dias>

            </Dias>


        </CriaFormHabito>

    )
}

export default CriaHabito;

const CriaFormHabito = styled.form`
    width: 340px;
    height: 180px;
    background: #ffffff;
    border-radius: 5px;
    text-align: center;
    opacity: 1;
    margin-bottom: 20px;
    input {
        width: 303px;
        height: 45px;
        border: solid 1px rgba(212, 212, 212, 1);
        padding-left: 11px;
        margin-top: 18px;
        border-radius: 5px;
        &:focus {
            outline: none;
            &::placeholder {
            color: transparent;
            }
        }
        &::placeholder {
            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            color: #dbdbdb;
        }
        }
        .CreatHabit__footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 16px;
        p {
            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            color: #52b6ff;
            margin-right: 23px;
        }
        button {
            width: 84px;
            height: 35px;
            background-color: #52b6ff;
            border: none;
            border-radius: 5px;
            font-family: "Lexend Deca";
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            color: #ffffff;
        }
    }
`;

const Dias = styled.div`
    display: flex;
    margin: 8px 0 29px 19px;
`;

const Dia = styled.div`
    &:nth-child(-n + 6) {
        margin-right: 4px;
    }
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: ${({ id, days }) =>
        days.includes(id) ? "rgba(207, 207, 207, 1)" : "rgba(255, 255, 255, 1)"};
    border: 1px solid #d5d5d5;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${({ id, days }) => (days.includes(id) ? "#FFFFFF" : "#DBDBDB")};`

