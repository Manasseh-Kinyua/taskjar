import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'

function RegisterScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

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

      if(password !== confirmPassword) {
        setMessage("Passwords don't match")
      } else {
        dispatch(register(name, email, password))
      }
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* <Row> */}
        <Col className='py-5' md={4}>
          <Card>
            <span style={{padding:'1rem', textAlign:'center', borderTopLeftRadius:'.5rem', borderTopRightRadius:'.5rem'}} className='bg'>
              <strong>SING IN</strong>
            </span>
            <Form className='p-3' onSubmit={submitHandler}>
              {loading && <Loader />}
              {error && <Message variant='danger'>{error}</Message>}
              {message && <Message variant='info'>{message}</Message>}
              <Form.Group controlId='name'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter username'
                  value={name}
                  onChange={(e) => setName(e.target.value)}>

                  </Form.Control>
              </Form.Group>

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

              <Form.Group controlId='confirmpassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}>

                  </Form.Control>
              </Form.Group>
              <span style={{marginTop:'1rem'}}>
                <Button
                  type='submit'
                  style={{width:'100%', marginTop:'1rem', backgroundColor:'rgb(208, 41, 208)'}}
                  >
                    Register
                </Button>
              </span>
              
            </Form>
            <span style={{padding:'1px', textAlign:'center'}}>
              <small >Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link></small>
            </span>
          </Card>
        </Col>
      {/* </Row> */}
    </div>
  )
}

export default RegisterScreen
