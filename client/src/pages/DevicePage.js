import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bigstar from '../assets/bigstar.png'


const DevicePage = () => {
const device = {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''}

  return (
    <Container className='mt-3'>
      <Col md={4}>
          <Image width ={300} height={300} src={device.img}/>
      </Col>
      <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div 
                className='d-flex align-items-center justify-content-between'
                style={{background: `no-repeat center center url(${bigstar})`, width:240, height:240, backgroundSize:'cover'}}
                  
                  //`url(${bigstar} no-repeat center center)`, width:240, height:240, backgroundSize:'cover'}}
            >
                {device.rating}
            </div>
          </Row>
      </Col>
      <Col md={4}>
      </Col>
    </Container>
  )
}

export default DevicePage;