    import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Erro from './pages/Erro';
import Header from './component/header';
import Filme from './pages/filme';
import Favoritos from './pages/Favoritos';
function RoutesApp(){
return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/filme/:id" element={<Filme/>} />
        <Route path='/favoritos' element={<Favoritos/>} />

     <Route path='*' element={<Erro/>}/>
    </Routes>
    
    </BrowserRouter>
    
)

}

export default RoutesApp;