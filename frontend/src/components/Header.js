import React from 'react'
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

  return (
    <header  className='fixed-nav '>
        <Navbar style={{minHeight:'10vh'}} className='bg'  variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><Image style={{width:'8%', marginRight:'.6rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4rK81-ngDpTadiTjXawJXtwmxEY7ND-YhQ&usqp=CAU' /><strong>Taskjar</strong></Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {userInfo ? (
                                <div style={{display: 'flex'}}>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                                    <NavDropdown
                                    title={userInfo.name}
                                    id='username'>
                                        <LinkContainer
                                            to='/profile'>
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item >Logout</NavDropdown.Item>
                                    </NavDropdown>
                              </div>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Login</Nav.Link>
                                </LinkContainer>
                            )}
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
