import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proyecto1 from '../img/Proyecto1.jpg'
import Button from '@mui/material/Button';

const MisCreaciones = () => {
    return (
        <>
            <Container >
                <Row style={{display: 'flex', marginTop: '7rem'}}>
                    <Col style={{display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial', alignItems: 'flex-start'}}>
                        <h1 style={{marginBottom: '5%'}}>Proyecto 1</h1>
                        <p style={{fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus malesuada est commodo, at aliquet leo sodales. Donec ac neque at arcu suscipit ullamcorper. Phasellus venenatis dui vel eros faucibus, vel porttitor eros finibus. Sed bibendum, justo quis sagittis vulputate, augue lorem bibendum dolor, nec congue enim lacus ut quam. </p>
                        <Button style={{backgroundColor: 'transparent', borderWidth: '0.8rem', borderRadius: '20%'}}>Ver Repositorio</Button>
                        <Button variant="outlined">Outlined</Button>
                    </Col>
                    <Col>
                    <img src={Proyecto1} width='80%' alt=''/>
                    </Col>
                </Row><br></br><br></br><br></br>
                
                <Row>
                    <Col style={{display: 'flex', color: 'black', flexDirection: 'column', textAlign: 'initial'}}>
                        <h1 style={{marginBottom: '5%'}}>Proyecto 1</h1>
                        <p style={{fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus malesuada est commodo, at aliquet leo sodales. Donec ac neque at arcu suscipit ullamcorper. Phasellus venenatis dui vel eros faucibus, vel porttitor eros finibus. Sed bibendum, justo quis sagittis vulputate, augue lorem bibendum dolor, nec congue enim lacus ut quam. </p>
                    </Col>
                    <Col style={{marginBottom: '7rem'}}>
                    <img src={Proyecto1} width='80%' alt=''/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MisCreaciones;