import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { createTask } from '../actions/taskActions'
import { CREATE_TASK_RESET } from '../constants/taskConstants'

function CreateTaskScreen() {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [urgency, setUrgency] = useState('')
    const [description, setDescription] = useState('')

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('name')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const taskCreate = useSelector(state => state.taskCreate)
    const {loading: loadingCreateTask, error: errorCreateTask, success: successCreateTask} = taskCreate

    useEffect(() => {
      if(!userInfo) {
        navigate('/login')
      }

      if(successCreateTask) {
        dispatch({type: CREATE_TASK_RESET})
        navigate(`/project/${params.id}/tasks?name=${projectName}`)
      }
    }, [navigate, userInfo, successCreateTask])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(createTask({
            project_id: params.id,
            name, type, urgency, description
        }))
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* <Row> */}
        <Col className='py-5' md={4}>
          <Card>
            <span style={{padding:'1rem', textAlign:'center', borderTopLeftRadius:'.5rem', borderTopRightRadius:'.5rem'}} className='bg'>
              <strong>CREATE TASK</strong>
            </span>
            <Form className='p-3' onSubmit={submitHandler}>
              {loadingCreateTask && <Loader />}
              {errorCreateTask && <Message variant='danger'>{errorCreateTask}</Message>}
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
                <Form.Label>Name</Form.Label>
                <Form.Select
                  aria-label
                  required
                  as='select'
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
                    Create
                </Button>
              </span>
              
            </Form>
          </Card>
        </Col>
      {/* </Row> */}
    </div>
  )
}

export default CreateTaskScreen
