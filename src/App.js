import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Entrar from './components/Entrar';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import Hoje from './components/Hoje';
import Historico from './components/Historico';
import Topo from './components/Topo';
import UserContext from './context/UserContext';
import { useState } from 'react';
import Menu from './components/Menu';

function App(){
    const [usuario, setUsuario] = useState(
        localStorage.getItem('userdata')
        ? JSON.parse(localStorage.getItem('userdata'))
        : null
    );
    
    const location = useLocation();
    const [habitosCompletos, setHabitosCompletos] = useState(0);
    console.log(usuario);
    return(
        <UserContext.Provider value={{usuario,setUsuario,habitosCompletos, setHabitosCompletos}}>
            {!(location.pathname === "/" || location.pathname === "/cadastro")
            ? (
                <>
                    <Topo/>
                    <Menu/>
                    
                </>
            ) : (<></>)
            }
            
                <Routes>
                    <Route path="/" element={<Entrar />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/habitos" element={<Habitos />}/>
                    <Route path="/hoje" element={<Hoje />}/>
                    <Route path="/historico" element={<Historico />}/>
                </Routes>
        </UserContext.Provider>
        
    )
    

}
export default App;