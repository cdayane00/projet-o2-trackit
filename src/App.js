import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Entrar from './Entrar';
import Cadastro from './Cadastro';
import Habitos from './Habitos';
import Hoje from './Hoje';
import Historico from './Historico';

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