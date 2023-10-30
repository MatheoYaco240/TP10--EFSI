import React, { } from 'react';
import '../css/Styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proyecto1 from '../img/Proyecto1.jpg'
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Home = () => {
    const [favorito, setFavorito] = useState(false)
    const agregarAFavoritos = () => {
        setFavorito(favorito ? false : true)
    }
    return (
        <>
            <link rel='stylesheet' href="Styles.css" />
            <div className="App" style={{backgroundColor:'beige'}}>
                <div
                    className="App-header"
                    style={{
                        backgroundColor:
                            'beige',
                    }}
                >

                    <h1 style={{ color: 'black', marginBottom: '2%' }}>Mi Portfolio</h1>

                    <div style={{ display: 'flex', fontSize: "1.45rem", color: 'black', minWidth: '60%', justifyContent: 'space-between', marginBottom: '2%' }}>
                        <a href="/info-personal" style={{ padding: '3%' }}>
                            Información
                        </a>
                        <a href="/mis-creaciones" style={{ padding: '3%' }}>
                            Mis Creaciones
                        </a>
                        <a href="/favoritos" style={{ padding: '3%' }}>
                            Favoritos
                        </a>
                        <a href="/perfil" style={{ padding: '3%' }}>
                            Perfil
                        </a>
                    </div>
                </div>

                <h1 style={{fontSize:'3.1rem'}}>Proyectos destacados</h1>
                
                    <Container style={{backgroundColor: 'beige', paddingLeft: '4rem', paddingRight: '4rem'}}>
                        <Row style={{ display: 'flex', marginTop: '7rem' }}>
                            <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '2rem' }}>
                                <div style={{display: 'flex',alignContent: 'space-around',alignItems: 'baseline'}}>
                                    <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>Proyecto 1</h1>
                                    <button onClick={() => agregarAFavoritos()} style={{paddingBottom: '0.15rem', backgroundColor: 'transparent', borderColor: 'transparent'}}>
                                        {
                                            !favorito ? <Icon icon="icon-park-outline:like"></Icon> : <Icon icon="icon-park-solid:like" style={{color: "#c41b1b"}}></Icon>
                                        }
                                    </button>
                                </div>
                                <p style={{ fontSize: '1.3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus malesuada est commodo, at aliquet leo sodales. Donec ac neque at arcu suscipit ullamcorper. Phasellus venenatis dui vel eros faucibus, vel porttitor eros finibus. Sed bibendum, justo quis sagittis vulputate, augue lorem bibendum dolor, nec congue enim lacus ut quam. </p>
                                <button style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#ddd', position: 'relative', background: 'transparent', padding: '14px 24px', borderRadius: '22px', border: '2', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black' }}>Ver Repositorio</button>
                            </Col>
                            <Col>
                                <img src={Proyecto1} alt='' width='100%' />
                            </Col>
                        </Row><br></br><br></br><br></br>

                        <Row style={{ display: 'flex', marginTop: '3rem' }}>
                            <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '2rem' }}>
                                <h1 style={{ marginBottom: '5%' }}>Proyecto 1</h1>
                                <p style={{ fontSize: '1.3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus malesuada est commodo, at aliquet leo sodales. Donec ac neque at arcu suscipit ullamcorper. Phasellus venenatis dui vel eros faucibus, vel porttitor eros finibus. Sed bibendum, justo quis sagittis vulputate, augue lorem bibendum dolor, nec congue enim lacus ut quam. </p>
                                <button style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#ddd', position: 'relative', background: 'transparent', padding: '14px 24px', borderRadius: '22px', border: '2', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black' }}>Ver Repositorio</button>
                            </Col>
                            <Col style={{ marginBottom: '7rem' }}>
                                <img src={Proyecto1} alt='' width='100%' />
                            </Col>
                        </Row>
                    </Container>
                <footer style={{ display: 'flex', padding: '2%', backgroundColor: '#1c3d78' }}>
                </footer>
            </div>
        </>
    )
}


export default Home;