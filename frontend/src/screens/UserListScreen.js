import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, Button } from 'react-bootstrap'
import { getAllUsers } from '../actions/userActions';
import { Link } from 'react-router-dom'

function UserListScreen() {

    const dispatch = useDispatch()

    const allUsers = useSelector(state => state.allUsers)
    const {loading, error, users} = allUsers

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const deleteUserHandler = (id) => {

    }

  return (
    <div>
      <Container maxWidth='xl'>
        <h1>users</h1>
        <Table responsive striped  hover  >
            <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.isAdmin ? (
                                <CheckCircleOutlineIcon style={{color:'green'}}/>
                            ) : (
                                <HighlightOffIcon style={{color:'red'}}/>
                            )}
                        </td>
                        <td>
                            <Link to={`/user/edit/${user.id}`}>
                                <Button  className='btn-sm bg-dark'>
                                    <EditIcon style={{color:'green'}} />
                                </Button>
                            </Link>
                        </td>
                        <td>
                            <Button onClick={() => deleteUserHandler(user.id)}  className='btn-sm bg-dark'>
                                <DeleteIcon style={{color:'red'}} />
                             </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default UserListScreen
