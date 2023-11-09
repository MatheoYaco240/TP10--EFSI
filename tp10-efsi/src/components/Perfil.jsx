import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

const Perfil = () => {
    const { usaurios } = useContext(UsuarioContext)

    const cerrarSesion = () => {
        
    }
    
    return (
        <>
        <h1 style={{ color: 'black', marginBottom: '2%' }}>Perfil</h1>
        <p>Nombre</p>
            <a onClick={() => {cerrarSesion()}} href='/'>Log Out</a>
        </>
    )
}

export default Perfil;