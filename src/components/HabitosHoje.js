import styled from "styled-components";
import { BsCheckSquareFill } from "react-icons/bs";

function HabitosHoje({habito, clique}){
    const {nome, sequencia, recorde, feito} = habito;
    return(
        <CadaHabito feito={feito} sequencia={sequencia} recorde={recorde}>
            <h1>{nome}</h1>
            <p>Sequencia atual: {sequencia} dias </p>
            <p>Seu recorde: {recorde} dias </p>
            <BsCheckSquareFill className="check" onClick={clique} />

        </CadaHabito>
    )
}
export default HabitosHoje;

const CadaHabito = styled.div`
    width: 340px;
    height: 94px;
    left: 18px;
    top: 177px;
    background: #FFFFFF;
    border-radius: 5px;

    h1{
        width: 208px;
        height: 25px;
        left: 33px;
        top: 190px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    p{
        width: 146px;
        height: 32px;
        left: 33px;
        top: 222px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    
    .check{
        font-size: 69px;
        position: absolute;
        top: 0;
        right: 0;
        margin: 13px 13px 0 0;
        cursor: pointer;
        fill: ${(props) => props.done ? "#8FC549" : '#E7E7E7'}
    }`;

export {CadaHabito};