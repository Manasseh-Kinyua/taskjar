import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { login } from '../actions/userActions'

function GuestUser() {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const guestEmail = "guestuser@email.com"
    const guestPassword = "guest12345"

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error} = userLogin
    
    const handleGuestUserLogin = () => {
        dispatch(login(
            guestEmail, guestPassword
        ))
        if(!loading) {
            setOpen(false)
        }
        if(error) {
            setOpen(true)
        }
    }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}>Login as Guest User</Button>
      <Dialog
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        open={open}
        onClose={() => setOpen(false)}>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
        <DialogTitle id='dialog-title'>Guest User</DialogTitle>
        <DialogContent>
            <DialogContentText className='py-3' id='dialog-description'>
                This feature can be used by any one but I made it with recruiters in mind. This is because I know that a recruiters time is valuable.
                So, this is a quick login so that you can use my site without having to create an account.
                
            </DialogContentText>
                <h6>Once you Login: </h6>
                <ul>
                    <li>You will be able to shop (Developer's Account)</li>
                    <li>You also get manager status (Admin's Account)</li>
                </ul>
        </DialogContent>
        <DialogActions>
            <Button
            onClick={handleGuestUserLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default GuestUser
