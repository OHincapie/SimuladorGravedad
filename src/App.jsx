import 'echarts-gl';
import earth from './assets/earth.jpg';
import jupiter from './assets/jupiter.jpg';
import marte from './assets/mars.jpg';
import mercurio from './assets/mercury.jpg';
import neptuno from './assets/neptune.jpg';
import saturn from './assets/saturn.jpg';
import urano from './assets/uranus.jpg';
import venus from './assets/venus.jpg';

import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setWorlds } from './store/slices/counter';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {

  const dispatch = useDispatch();
  const handleWorlds = (imagen, gravedad) => {
    const worlds = {
      imagen, gravedad
    }
    dispatch(setWorlds(worlds));
  };

  const planetas = [
    {
      name: 'Mercurio',
      imagen: mercurio,
      gravity: 3.7
    },
    {
      name: 'Venus',
      imagen: venus,
      gravity: 8.87
    },
    {
      name: 'Tierra',
      imagen: earth,
      gravity: 9.8
    },
    {
      name: 'Marte',
      imagen: marte,
      gravity: 3.72
    },
    {
      name: 'Jupiter',
      imagen: jupiter,
      gravity: 24.7
    },
    {
      name: 'Saturno',
      imagen: saturn,
      gravity: 10.4
    },
    {
      name: 'Urano',
      imagen: urano,
      gravity: 8.7
    },
    {
      name: 'Neptuno',
      imagen: neptuno,
      gravity: 11.15
    }
  ];


  return (
    <Container fluid>
      <h1 className='mb-5'>Planetas del Sistema Solar</h1>
      <Row>
        {planetas.map((planeta, index) => (
          <Col key={index} xs={12} md={4} className='mb-4'>
            <Link to='/world'>
              <Button onClick={() => { handleWorlds(planeta.imagen, planeta.gravity) }}>
                {planeta.name}
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App