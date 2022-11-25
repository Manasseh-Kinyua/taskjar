import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
      if(userInfo) {
        navigate(redirect)
      }
    }, [navigate, userInfo])

    const submitHandler = (e) => {
      e.preventDefault()

      dispatch(login(email, password))
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* <Row> */}
        <Col className='py-5' md={3}>
          <Card>
            <span style={{padding:'1rem', textAlign:'center', borderTopLeftRadius:'.5rem', borderTopRightRadius:'.5rem'}} className='bg'>
              <strong>SING IN</strong>
            </span>
            <Form className='p-3' onSubmit={submitHandler}>
              {loading && <Loader />}
              {error && <Message variant='danger'>{error}</Message>}
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type='email'
                  placeholder='Enter email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}>

                  </Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}>

                  </Form.Control>
              </Form.Group>
              <span style={{marginTop:'1rem'}}>
                <Button
                  type='submit'
                  style={{width:'100%', marginTop:'1rem', backgroundColor:'rgb(208, 41, 208)'}}
                  >
                    Login
                </Button>
              </span>
              
            </Form>
            <span style={{padding:'1px', textAlign:'center'}}>
              <small >Don't have an account yet? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign Up</Link></small>
            </span>
          </Card>
        </Col>
      {/* </Row> */}
    </div>
  )
}

export default LoginScreen
