import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Entrar from './components/Entrar';
import Cadastro from './components/Cadastro';
import Habitos from './components/Habitos';
import Hoje from './components/Hoje';
import Historico from './components/Historico';
import Topo from './components/Topo';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Entrar />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/habitos" element={<Habitos />}/>
                <Route path="/hoje" element={<Hoje />}/>
                <Route path="/historico" element={<Historico />}/>
            </Routes>
        </BrowserRouter>
    )
    

}
export default App;