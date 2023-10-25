import React, { useState, useEffect } from 'react';
import '../css/Styles.css'

const Login = () => {
    localStorage.setItem('usuarios', JSON.stringify({idActivo:-1, usuarios: [{idUsuario: 0, email: 'admin', contrasenia: 'admin', nombre: 'admin', favoritos: []}]}))
    
    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem("usuarios") || []).usuarios.findIndex((usuario) => usuario.email === 'admin' && usuario.contrasenia === 'admin') === -1){
        }
    },[])

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))

    useEffect(() => {
        console.log(usuarios)
    }, [usuarios])

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [typeInput, setTypeInput] = React.useState("password")

    const [href, setHref] = React.useState("#")

    const mostrarPassword = () => {
        const togglePassword = document.querySelector("#togglePassword");
        //const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            //const type = password.getAttribute("type") === "password" ? "text" : "password";
            const type = typeInput === "password" ? "text" : "password";
            //password.setAttribute("type", type);
            setTypeInput(type);

            // toggle the icon
            //this.classList.toggle("bi-eye");
        });
    }

    const validacion = () => {
        const posicion = usuarios.usuarios.findIndex((usuario) => usuario.email === email && usuario.contrasenia === password)
        if(posicion !== -1){
            const { historial = [], idActivo = -1 } = JSON.parse(localStorage.getItem("Historial")) || {};
            const newData = {
                historial: historial,
                idActivo: posicion
            }
            localStorage.setItem("Historial", JSON.stringify(newData));
            setHref("/home")
        }
        else{
            console.error("Error: Usuario no econtrado")
            setHref("#")
        }
        /*
        const valor = true
        if(valor){
            setHref('/home')
        }
        else{
            setHref('#')
            console.error('Usuario no encontrado')
        }*/
    }

    return (
        <>
            <link rel='stylesheet' href="Styles.css" />
            <div className="App">
                <div
                    className="App-header"
                    style={{
                        backgroundColor:
                            'beige',
                    }}
                >

<h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '5%' }}>Inicio de Sesión</h1>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginBottom: '2%' }}>
    <label htmlFor="email">Email:</label>
    <input id="email" type="text" placeholder="admin" style={{marginBottom: '5%'}}/>

    <label htmlFor="email">Contraseña:</label>
    <div>
        <input name="password" id="password" type={typeInput} placeholder="admin"/>
        <button style={{ cursor: "pointer" }} className="bi bi-eye-slash" id="togglePassword" onClick={mostrarPassword}>𓂀</button>
    </div>
</div>

<a style={{ fontSize: '1.3rem', marginBottom: '2%', backgroundColor: '#1b33d1b8' }} onClick={validacion} href={href} className='btn text-light'>Iniciar Sesión</a>

                </div>
                <footer style={{ display: 'flex', padding: '2%', backgroundColor: '#1c3d78' }}>

                </footer>
            </div>
        </>
    )
}

export default Login;