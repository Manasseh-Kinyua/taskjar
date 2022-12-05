import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import { Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getUserDetails } from '../actions/userActions';

function UserEditScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

    const params = useParams()

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails
    console.log(user)

    useEffect(() => {
      if(!user || user.id !== Number(params.id)) {
        dispatch(getUserDetails(params.id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }, [dispatch, user, params.id])

    const submitEditUserHandler = (e) => {
      e.preventDefault()
    }

  return (
    <div>
      <Container>
        <Link to='/admin/userlist'>Back to user list</Link>
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
