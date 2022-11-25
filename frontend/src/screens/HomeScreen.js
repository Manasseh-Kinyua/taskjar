import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../actions/projectActions'
import Project from '../components/Project'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

function HomeScreen() {

  const dispatch = useDispatch()

  const projectList = useSelector(state => state.projectList)
  const {loading, error, projects} = projectList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    dispatch(listProjects())
  }, [dispatch])

  return (
    <Container maxWidth="xl">
      <Row>
        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <h5>PROJECTS</h5>
          {userInfo ? (
            <Button className='btn-md' style={{backgroundColor:'#20c997'}}>Create Project</Button>
          ) : (
            <Message variant='info'>Login to create project: <Link to='/login'> Login</Link></Message>
          )}
        </span>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row className=' py-3'>
          {projects.map(project => (
            <Col className='my-1' md={3} key={project.id}>
              <Project project={project}/>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeScreen
