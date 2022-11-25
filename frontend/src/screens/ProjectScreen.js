import React, { useEffect } from 'react'
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import Container from '@mui/material/Container';
import { AvatarGroup } from '@mui/material';
import { Avatar } from '@mui/material';
import { Chip } from '@mui/material';
import { Badge } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { listProjectDetails } from '../actions/projectActions'
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProjectScreen() {

  const params = useParams()

  const dispatch = useDispatch()
  const projectId = params.id

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const projectName = searchParams.get('name')

  const projectDetails = useSelector(state => state.projectDetails)
  const {loading, error, project} = projectDetails

  useEffect(() => {
    dispatch(listProjectDetails(projectId))

  }, [dispatch, projectId])

  return (
    <div>
      <Container maxWidth="xl">
        <Row className='gap-1'>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Col md={5}>
                <Card style={{padding:'1rem'}}>
                  <h5 style={{textTransform:'uppercase'}}>{project.name}</h5>
                  <ListGroup>
                    <Row>
                    <Col>
                      <ListGroup.Item>
                        <strong>Creator</strong>
                      </ListGroup.Item>
                    </Col>
                    <Col>
                      <ListGroup.Item>
                        <span style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                            <strong className='green-text pl-2'>@{project.scrum}</strong>
                        </span>
                      </ListGroup.Item>
                    </Col>
                    </Row>

                    <ListGroup.Item>
                        {project.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Badge badgeContent={project.tasks && project.tasks.length} color="secondary" showZero>
                        <Chip label="Tasks" color='secondary' variant="outlined" />
                      </Badge>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <AvatarGroup max={2}>
                        <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                      </AvatarGroup>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            )}
            
            <Col md={4}>
              <Card style={{padding:'1rem'}}>
                <h5 style={{textTransform:'uppercase'}}> <PeopleOutlineIcon /> Contributors({project.contributors && project.contributors.length})</h5>
                  {project.contributors && project.contributors.map(contributor => (
                    <ListGroup className='my-1' key={contributor.id}>
                      <ListGroup.Item className='py-1' >
                      <span  style={{display:'flex', alignItems:'center'}}>
                        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <span style={{marginLeft:'1rem', display:'flex', flexDirection:'column'}}>
                          <small style={{fontSize:'1rem',}} className='green-text'>@{contributor}</small>
                          <small style={{fontSize:'.9rem',}} >{contributor}</small>
                        </span>
                      </span>
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
              </Card>
            </Col>

            <Col md={2}>
              <Card style={{padding:'1rem'}}>
                <Link to={`/project/${project.id}/tasks?name=${project.name}`}><Button style={{backgroundColor:'#20c997'}}>View Tasks</Button></Link>
              </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectScreen
