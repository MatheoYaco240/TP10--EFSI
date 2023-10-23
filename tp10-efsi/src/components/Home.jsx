import React, { } from 'react';
import '../css/Styles.css'

const Home = () => {
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

                    <h1 style={{ color: 'black', marginBottom: '2%' }}>Mi Portfolio</h1>

                    <div style={{ display: 'flex', fontSize: "1.45rem", color: 'black', minWidth: '60%', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <a href="/info-personal" style={{padding: '3%'}}>
                            Información
                        </a>
                        <a href="/mis-creaciones" style={{padding: '3%'}}>
                            Mis Creaciones
                        </a>
                        <a href="/favoritos" style={{padding: '3%'}}>
                            Favoritos
                        </a>
                        <a href="/perfil" style={{padding: '3%'}}>
                            Perfil
                        </a>
                    </div>
                </div>
                <footer style={{ display: 'flex', padding: '2%', backgroundColor: '#1c3d78' }}>

                </footer>
            </div>
        </>
    )
}


export default Home;