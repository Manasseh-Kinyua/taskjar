import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <header className='fixed-nav bg'>
        <Navbar className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* <LinkContainer to='/'> */}
                        <Navbar.Brand>Taskjar</Navbar.Brand>
                    {/* </LinkContainer> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {/* <LinkContainer to='/cart'> */}
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            {/* </LinkContainer> */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
