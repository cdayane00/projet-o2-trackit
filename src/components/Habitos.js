import styled from "styled-components";
import CriaHabito from "./CriaHabito";

import axios from "axios";
import {useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import {BsTrash} from  'react-icons/bs';
import { BsPlusSquareFill } from "react-icons/bs";


function Habitos(){
    
    const {usuario} = useContext(UserContext);
    const diasDaSemana = ["D","S","T","Q","Q","S","S"];
    const [habito, setHabito] = useState();
    const [criaFormHabito, setCriaFormHabito] = useState(false);

    function listaHabito(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`,
            },
        };
        const promise = axios.get(URL, config);
        promise.then((response)=>{
            const{dados} = response;
            setHabito(dados);
        })
        promise.catch((erro)=>{
            alert(erro.response.statusText);
        })
    }

    function excluiHabito(id){
        if(window.confirm('Tem certeza que quer excluir esse hábito?')){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const config = {
                headers: {
                    Authorization: `Bearer ${usuario.token}`,
                },
            };
            const promise = axios.delete(URL, config);
            promise.then(listaHabito);
            promise.catch((erro)=>{
                alert(erro.response.statusText);
            });
        };
    }
    useEffect(()=>{listaHabito();},[]);
    return(
        <Corpo>
            <DivHabitos>
                <h1>Meus hábitos</h1>
                <BsPlusSquareFill className="adiciona-habito" onClick={()=>setCriaFormHabito(!criaFormHabito)}/>
            </DivHabitos>
            <CriaHabito criaFormHabito={criaFormHabito} setCriaFormHabito={setCriaFormHabito} listaHabito={()=>listaHabito} />
            {habito ? (
                habito.map(({id,nome,dias})=>(
                    <DivHabito className="habito">
                        <p className="habito-nome">{nome}</p>
                        <DiasHabito>
                            {diasDaSemana.map((dia,i)=>{return(
                                <DiaHabito className="dia" id={i} dias={dias} key={i}>
                                    <p>{dia}</p>
                                </DiaHabito>
                            )})}
                        </DiasHabito>
                        <BsTrash className="trash-icon" onClick={()=>excluiHabito(id)}/>
                    </DivHabito>
                ))) : (
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                )
            }
        </Corpo>
        
    )
}
export default Habitos;

const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    min-width: 100vw;
    min-height: 100vh;
    padding-bottom: 100px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
        padding: 0 10px;
    }
`;

const DivHabitos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    padding: 92px 18px 20px 18px;
    h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
    }
    .adiciona-habito {
        width: 40px;
        height: 35px;
        color: #52B6FF;
    }
`;
const DivHabito = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: relative;
    margin-bottom: 10px;
    .trash-icon {
        position: absolute;
        top: 0;
        right: 0;
        margin: 11px 10px 0 0;
        color: rgba(102, 102, 102, 1);
        font-size:15px;
    }
    .habito-nome {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
        padding-top: 13px;
        padding-left: 15px;
    }
`;
const DiasHabito = styled.div`
    display: flex;
    margin: 8px 0 0 14px;
`;

const DiaHabito = styled.div`
    &:nth-child(-n+6) {
        margin-right: 4px;
    }

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: ${({id, days }) => days.includes(id) ? "rgba(207, 207, 207, 1)" : "rgba(255, 255, 255, 1)"};
    border: 1px solid #D5D5D5;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${({id, days }) => days.includes(id) ? "#FFFFFF" : "#DBDBDB" };
`;
