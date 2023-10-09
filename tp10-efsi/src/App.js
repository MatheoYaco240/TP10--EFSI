import logo from './logo.svg';
import './App.css';
import UsuarioProvider from './context/UsuarioContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';
import InfoPersonal from './components/InfoPersonal';
import MisCreaciones from './components/MisCreaciones';
import Perfil from './components/Perfil';
import Favoritos from './components/Favoritos';
import DetalleCreacion from './components/DetalleCreacion';

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/info-personal" element={<InfoPersonal />}></Route>
            <Route path="/mis-creaciones" element={<MisCreaciones />}></Route>
            <Route path="/detalle-creacion" element={<DetalleCreacion />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/perfil" element={<Perfil />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
