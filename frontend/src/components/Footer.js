import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg footer'>
      <Container>
        <Row>
            <Col className='text-center text-light py-3'>
                copyright &copy; Taskjar
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
