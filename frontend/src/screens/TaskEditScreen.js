import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { createTask, editTask, listTaskDetails } from '../actions/taskActions'
import { EDIT_TASK_RESET } from '../constants/taskConstants'

function TaskEditScreen() {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [urgency, setUrgency] = useState('')
    const [description, setDescription] = useState('')

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('p-name')
    const projectId = searchParams.get('p-id')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const taskDetail = useSelector(state => state.taskDetail)
    const {task} = taskDetail

    const taskEdit = useSelector(state => state.taskEdit)
    const {loading, error, success} = taskEdit

    useEffect(() => {
      if(success) {
        dispatch({type: EDIT_TASK_RESET})
        navigate(`/project/${projectId}/tasks?name=${projectName}`)
      }
      if(!userInfo) {
        navigate('/login')
      } else {
        if(!task.name || task.id !== Number(params.id)) {
            dispatch(listTaskDetails(params.id))
        } else {
            setName(task.name)
            setType(task.type)
            setUrgency(task.urgency)
            setDescription(task.description)
        }
      }
    }, [dispatch, navigate, userInfo, task, params.id, success])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(editTask({
            id: params.id,
            name, type, urgency, description
        }))
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* <Row> */}
        <Col className='py-5' md={4}>
          <Card>
            <span style={{padding:'1rem', textAlign:'center', borderTopLeftRadius:'.5rem', borderTopRightRadius:'.5rem'}} className='bg'>
              <strong>EDIT TASK</strong>
            </span>
            <Form className='p-3' onSubmit={submitHandler}>
                {loading && <Loader />}
                {error && <Message variant='warning'>{error}</Message>}
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Enter task name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}>

                  </Form.Control>
              </Form.Group>

              <Form.Group controlId='type'>
                <Form.Label>Name</Form.Label>
                <Form.Select
                  aria-label
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  >
                    <option value=''>Select type...</option>
                    <option value='feature'>Feature</option>
                    <option value='bug'>Bug</option>
                  </Form.Select>
              </Form.Group>

              <Form.Group controlId='urgency'>
                <Form.Label>Urgency</Form.Label>
                <Form.Select
                  aria-label
                  required
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  >
                    <option value=''>Select Urgency...</option>
                    <option value='not urgent'>Not Urgent</option>
                    <option value='urgent'>Urgent</option>
                    <option value='very urgent'>Very Urgent</option>
                  </Form.Select>
              </Form.Group>

              <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as='textarea'
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}>

                  </Form.Control>
              </Form.Group>
              <span style={{marginTop:'1rem'}}>
                <Button
                  type='submit'
                  style={{width:'100%', marginTop:'1rem', backgroundColor:'rgb(208, 41, 208)'}}
                  >
                    Update
                </Button>
              </span>
              
            </Form>
          </Card>
        </Col>
      {/* </Row> */}
    </div>
  )
}

export default TaskEditScreen
