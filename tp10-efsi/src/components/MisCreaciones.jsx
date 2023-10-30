import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proyecto1 from '../img/Proyecto1.jpg'
import { CreationContext } from '../context/CreationContext'
import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

const MisCreaciones = () => {
    const { creaciones } = useContext(CreationContext)
    console.log(creaciones)

    const [favorito, setFavorito] = useState(false)

    const agregarAFavoritos = () => {
        setFavorito(favorito ? false : true)
    }

    return (
        <>
            <Container style={{ backgroundColor: 'beige', paddingLeft: '4rem', paddingRight: '4rem' }}>
                {creaciones != null &&
                    creaciones.map((creacion) =>
                        <>
                            <Row style={{ display: 'flex', marginTop: '7rem' }}>
                                <Col style={{ display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start', maxWidth: '65%', marginRight: '2rem' }}>
                                    <div style={{ display: 'flex', alignContent: 'space-around', alignItems: 'baseline' }}>
                                        <h1 style={{ marginBottom: '5%', marginRight: '0.5rem' }}>{creacion.nombre}</h1>
                                        <button onClick={() => agregarAFavoritos()} style={{ paddingBottom: '0.3rem', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                            {
                                                !favorito ? <Icon icon="icon-park-outline:like" style={{paddingBottom: '0.4rem'}}></Icon> : <Icon icon="icon-park-solid:like" style={{ color: "#c41b1b", paddingBottom: '0.4rem' }}></Icon>
                                            }
                                        </button>
                                    </div>
                                    <p style={{ fontSize: '1.3rem' }}>{creacion.descripcion}</p>
                                    <button style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#ddd', position: 'relative', background: 'transparent', padding: '14px 24px', borderRadius: '22px', border: '2', borderColor: '#1c3d78', borderWidth: '2px', fontSize: '1rem', color: 'black' }}>Ver Repositorio</button>
                                </Col>
                                <Col>
                                    <img src={creacion.imagen} alt='' width='100%' />
                                </Col>
                            </Row><br></br><br></br><br></br>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default MisCreaciones;