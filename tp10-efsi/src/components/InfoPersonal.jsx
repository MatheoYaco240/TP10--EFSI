import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const InfoPersonal = () => {
    return (
        <Container>
            <Row style={{ color: 'black', paddingLeft: '3rem', paddingRight: '3rem' }}>
                <h1 style={{ color: 'black', marginBottom: '10%', fontSize: '3rem' }}>Información Personal</h1>
                <Col md={6}>
                    <p style={{ fontSize: '1.5rem' }}>Mi nombre es Matheo Franco Yacovino, tengo {new Date().getFullYear() - new Date(2006, 2, 7).getFullYear()} años y me gusta programar. Me interesa todo lo que tiene que ver con la informática, en especial el desarrollo backend, el funcionamiento de las aplicaciones y APIs. </p>
                    <p style={{ fontSize: '1.5rem' }}>Soy un estudiante avanzado del colegio ORT Almagro, cursando último año de la especialidad de Informática (5to informática A). Algún día me gustaría colaborar en la creación de una aplicación o en el desarrollo de un software para un cliente. </p>
                </Col>
                <Col md={6}>
                    <p style={{ fontSize: '1.5rem' }}>Actualmente estoy preparándome para el ingreso a la UTN Facultad Regional de Buenos Aires y al mismo tiempo estoy por rendir el examen internacional First Certificate Exam de Cambridge en diciembre de 2023. </p>
                    <p style={{ fontSize: '1.5rem' }}>A lo largo del secundario he aprendido varios lenguajes de programación frontend y backend tales como JavaScript, CSS, HTML, MSSQL, etc; herramientas muy usadas en la actualidad como Photoshop, Illustrator, Figma, GitHub, Trello y librerías como React o React Native. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoPersonal;