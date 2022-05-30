import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';
import axios from "axios";
import UserContext from "../context/UserContext";
import HabitosHoje from "./HabitosHoje";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

function Hoje(){

    const { habitosCompletos, setHabitosCompletos, usuario } = useContext(UserContext);
    const [habitosHoje, setHabitosHoje] = useState();

    function mostraHabitosHoje(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {
        headers: {
            Authorization: `Bearer ${usuario.token}`,
        },
        };
        console.log(usuario.token)
        const promise = axios.get(URL,config);
        promise.then((response)=>{
            setHabitosHoje(response.data);
            setHabitosCompletos((response.data.filter((habito)=> habito.done).length/response.data.length)*100);
        })
        promise.catch((erro)=>{alert(erro.response.statusText)});
    }

    const marcaHabito = (id) =>{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const config = {
            headers:{
                Authorization: `Bearer ${usuario.token}`,
            },
        };
        const promise = axios.post(URL, null, config);
        promise.then(mostraHabitosHoje);
        promise.catch((erro)=>(alert(erro.response)));
    };

    const desmarcaHabito = (id) =>{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const config = {
            headers:{
                Authorization: `Bearer ${usuario.token}`,
            },
        };
        const promise = axios.post(URL, null, config);
        promise.then(mostraHabitosHoje);
        promise.catch((erro)=>(alert(erro.response)));
    };

    useEffect(()=> {
        if(localStorage.getItem('userdata')){
            mostraHabitosHoje();
        }
    },[]);

    function marcaDesmarca(id){
        habitosHoje.find((habito)=>habito.id === id).done
            ? desmarcaHabito(id)
            : marcaHabito(id);
    }


    return(
        <Corpo>
            <div className="corpo">
                <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
                {habitosHoje ? (
                    habitosCompletos > 0 ? (
                        <p>{habitosCompletos.toFixed()}% dos hábitos concluídos</p>
                    ) 
                    : (
                        <p>Nenhum hábito concluído ainda</p>
                    )
                )
                : (
                    <></>
                )}   
            </div>
            <div>
                {habitosHoje ? habitosHoje.map((habito)=>
                    <HabitosHoje habito={habito} clique={()=> marcaDesmarca(habito.id)}/>)
                :
                <div>
                    <p>Crie um hábito</p>
                </div>
            }
            </div>
        </Corpo>
    )
}
export default Hoje;

const Corpo = styled.div`
    .corpo{
        margin-top:100px;
    }
    .corpo h1{
        width: 250px;
        height: 29px;
        margin-left: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    .corpo p{
        width: 278px;
        height: 22px;
        margin-left: 17px;
        margin-top: 0px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`;