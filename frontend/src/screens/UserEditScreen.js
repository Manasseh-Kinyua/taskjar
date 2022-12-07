import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import { Form, Button } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { editUser, getUserDetails } from '../actions/userActions';
import { USER_EDIT_RESET } from '../constants/userConstants';

function UserEditScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const params = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userEdit = useSelector(state => state.userEdit)
    const {loading: loadingEditUser, error: errorEditUser, success: successEditUser} = userEdit

    useEffect(() => {
      if(successEditUser) {
        dispatch({type: USER_EDIT_RESET})
        navigate('/admin/userlist')
      } else {
        if(!user || user.id !== Number(params.id)) {
          dispatch(getUserDetails(params.id))
        } else {
          setName(user.name)
          setEmail(user.email)
          setIsAdmin(user.isAdmin)
        }
      }
    }, [dispatch, user, params.id, successEditUser, navigate])

    const submitEditUserHandler = (e) => {
      e.preventDefault()

      dispatch(editUser(params.id, {isAdmin}))
    }

  return (
    <div>
      <Container>
        <Link to='/admin/userlist'>Back to user list</Link>
        <div className='py-5'  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='warning'>{error}</Message>
          ) : (
            <Form className='my-1' onSubmit={submitEditUserHandler}>
              <h5>UPDATE USER</h5>
              {loadingEditUser && <Loader />}
              {errorEditUser && <Message variant="warning">{errorEditUser}</Message>}
              <Form.Group controlId='name'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  readOnly
                  value={name}
                  onChange={(e) => setName(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  readOnly
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group controlId='name'>
                <Form.Check
                  label='Is Admin'
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
              </Form.Group>

              <Button type='submit'>Update</Button>
            </Form>
          )}
        </div>
      </Container>
    </div>
  )
}

export default UserEditScreen
