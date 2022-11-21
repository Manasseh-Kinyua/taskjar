import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'

function Header() {
  return (
    <header className='fixed-nav bg'>
        <Navbar className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* <LinkContainer to='/'> */}
                        <Navbar.Brand><Image style={{width:'8%', marginRight:'.6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiPHdvJCA6fK8KxWiLbVua4J412BbgllO0A&usqp=CAU' /><strong>Taskjar</strong></Navbar.Brand>
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
