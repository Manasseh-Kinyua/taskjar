import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../actions/userActions';
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProfileScreen() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const userProfile = useSelector(state => state.userProfile)
  const {loading, error, user} = userProfile
  console.log(user)

  useEffect(() => {
    if(!userInfo) {
      navigate('/login')
    } else {
      if(!user) {
        dispatch(getUserProfile())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, userInfo, navigate, user])

  return (
    <div>
      <Container maxWidth='lg'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="warning">{error}</Message>
        ) : (
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <ListGroup >
            <ListGroup.Item>
              <Avatar sx={{ width: 150, height: 150 }} alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{user && user.name}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>PROFILE/UPDATE</h5>
              <Form>
                {message && <Message variant='info'>{message}</Message>}
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmpassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className='my-2' style={{width:'100%'}}>Update</Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </div>
        )}
      </Container>
    </div>
  )
}

export default ProfileScreen
