import React, { useEffect } from 'react'
import { Row, Col, Button, Alert } from 'react-bootstrap'
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'
import { createProject, listProjects } from '../actions/projectActions'
import Project from '../components/Project'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECT_CREATE_RESET } from '../constants/projectConstants';
import IntroCarousel from '../components/IntroCarousel';
import GuestUser from '../components/GuetsUser';

function HomeScreen() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const projectList = useSelector(state => state.projectList)
  const {loading, error, projects} = projectList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const projectCreate = useSelector(state => state.projectCreate)
  const {loading: loadingCreateProject, error: errorCreateProject, success: successCreateProject, project} = projectCreate

  const projectDelete = useSelector(state => state.projectDelete)
  const {success: successDeleteProject} = projectDelete

  useEffect(() => {
    if(successCreateProject) {
      navigate(`/project/${project.id}/edit`)
      dispatch({type: PROJECT_CREATE_RESET})
    }
    dispatch(listProjects())
  }, [dispatch, successCreateProject, navigate, successDeleteProject])

  const createProjectHandler = () => {
    dispatch(createProject())
  }

  return (
    <Container maxWidth="xl">
      <Alert variant='success'>
        If you are a Recruiter and dont want to create an account, You can login as a Guest User to try my app. <GuestUser />
      </Alert>
      <Row className='my-3'>
        <IntroCarousel />
      </Row>
      <Row>
        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <h5>PROJECTS</h5>
          {userInfo ? (
            <Button
              onClick={createProjectHandler}
              className='btn-md' style={{backgroundColor:'#20c997'}}
              >
                Create Project
            </Button>
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
