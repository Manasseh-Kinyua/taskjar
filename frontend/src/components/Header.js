import React from 'react'
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())

        navigate('/login')
    }

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
                                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                              </div>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Login</Nav.Link>
                                </LinkContainer>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <div style={{display: 'flex'}}>
                                    <NavDropdown
                                        title="Admin"
                                        id='admin'>
                                            <LinkContainer
                                                to='/admin/userlist'>
                                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                            </LinkContainer>
                                    </NavDropdown>
                              </div>
                            )}
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header
