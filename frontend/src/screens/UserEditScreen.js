import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import { Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';

function UserEditScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

    const params = useParams()

    const dispatch = useDispatch()

    useEffect(() => {

    })

    const submitEditUserHandler = (e) => {
      e.preventDefault()
    }

  return (
    <div>
      <Container>
        <div className='py-5'  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          
          <Form className='my-1' onSubmit={submitEditUserHandler}>
            <h5>UPDATE USER</h5>
            <Form.Group controlId='name'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='name'>
              <Form.Check
                as='checkbox'
                label='IsAdmin'
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
            </Form.Group>

            <Button type='submit'>Update</Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default UserEditScreen
