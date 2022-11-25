import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { editProject, listProjectDetails } from '../actions/projectActions'
import { PROJECT_EDIT_RESET } from '../constants/projectConstants'

function ProjectEditScreen() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const params = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const projectDetails = useSelector(state => state.projectDetails)
    const {project} = projectDetails

    const projectEdit = useSelector(state => state.projectEdit)
    const {loading, error, success} = projectEdit

    useEffect(() => {
      if(success) {
        dispatch({type: PROJECT_EDIT_RESET})
        navigate('/')
      } else {
        if(!userInfo) {
            navigate('/login')
          } else {
            if(!project || project.id !== Number(params.id)) {
                dispatch(listProjectDetails(params.id))
            } else {
                setName(project.name)
                setDescription(project.description)
            }
          }
      }
    }, [dispatch, navigate, userInfo, project, params.id, success])

    const submitHandler = (e) => {
      e.preventDefault()

      dispatch(editProject({
        id: params.id,
        name, description
      }))
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* <Row> */}
        <Col className='py-5' md={3}>
          <Card>
            <span style={{padding:'1rem', textAlign:'center', borderTopLeftRadius:'.5rem', borderTopRightRadius:'.5rem'}} className='bg'>
              <strong>EDIT</strong>
            </span>
            <Form className='p-3' onSubmit={submitHandler}>
              {loading && <Loader />}
              {error && <Message variant='danger'>{error}</Message>}
              <Form.Group controlId='name'>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}>

                  </Form.Control>
              </Form.Group>

              <Form.Group controlId='description'>
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  as='textarea'
                  required
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
                    Edit
                </Button>
              </span>
              
            </Form>
          </Card>
        </Col>
      {/* </Row> */}
    </div>
  )
}

export default ProjectEditScreen
