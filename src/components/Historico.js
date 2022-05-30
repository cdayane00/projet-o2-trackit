import styled from "styled-components";
function Historico(){
    return(
        <Msg>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> 
        </Msg>
    )
}
export default Historico;
 const Msg = styled.div`
    p{
        width: 338px;
        height: 74px;
        margin-left: 15px;
        margin-top: 10px;
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        
        color: #666666;
    }
    h1{
        width: 100px;
        height: 29px;
        margin-left: 17px;
        margin-top: 98px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;
    }
    `;
