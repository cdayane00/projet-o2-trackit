import styled from "styled-components";
import bob from "../assets/img/bob.png"

function Topo(){
    return(
        <Cabecalho>
            <p>TrackIt</p>
            <img src={bob}/>
        </Cabecalho>
    )
}
export default Topo;

const Cabecalho = styled.div`
    width: 100%;
    height: 70px;
    margin-left: -7px;
    margin-top: -7px;
    padding-top: 3px;
    display: flex;
    position: fixed;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    p{
        width: 97px;
        height: 49px;
        margin-left: 18px;
        margin-top: 10px;

        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        margin-left: 180px;
        margin-top: 7px;
        border-radius: 98.5px;
    }`