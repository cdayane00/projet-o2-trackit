import styled from "styled-components";
import bob from "../assets/img/bob.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Habitos(){
    return(
        <Corpo>
            <div className="corpo">
                <h1>Meus hábitos</h1>
                <div className="botao">
                    <h1>+</h1>
                </div>
                <div className="habito">
                    <input className="input" type="text" placeholder="nome do hábito"/>
                    <div className="dias">
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </div>
                    <div className="botoes">
                        <p>Cancelar</p>
                        <button>Salvar</button>
                    </div>
                    
                    
                </div>
            </div>

        </Corpo>
        
    )
}
export default Habitos;

const Corpo = styled.div`
    .corpo{
        margin-top:100px;
        display:flex;
        flex-wrap: wrap;
    }
    .corpo h1{
        width: 148px;
        height: 29px;
        margin-left: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    .botao{
        width: 40px;
        height: 35px;
        margin-left: 140px;
        margin-top: 5px;
        margin-bottom: 20px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
    .botao h1{
        width: 16px;
        height: 34px;
        margin-left: 12px;
        margin-top: 0px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;

    }
    .habito{
        width: 340px;
        height: 180px;
        margin-left: 17px;
        margin-top:0;
        background: #FFFFFF;
        border-radius: 5px;
        
    }
    .habito input{
        width: 303px;
        height: 45px;
        margin-left: 18px;
        margin-top: 20px;
        padding-left: 10px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    .dias{
        display:flex;
        flex-wrap:wrap;
        margin-top: 10px;
        margin-left: 18px;
    }
    .dias div{
        width: 30px;
        height: 30px;
        margin-right: 5px;
        padding-left: 7px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;

    }
    .botoes{
        display:flex;
        flex-wrap:wrap;
    }
    .botoes p{
        width: 69px;
        height: 20px;
        margin-left: 140px;
        margin-top: 30px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
    .botoes button{
        width: 84px;
        height: 35px;
        margin-left: 25px;
        margin-top: 22px;
        border:0;
        background: #52B6FF;
        border-radius: 4.63636px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
    }`
    ;

