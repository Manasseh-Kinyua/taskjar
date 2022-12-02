import React, { useEffect } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listTaskDetails } from '../actions/taskActions'
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { Row, Col, ListGroup, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

function TaskScreen() {

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('p-name')
    const projectId = searchParams.get('p-id')
    console.log(projectName, projectId)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const taskDetail = useSelector(state => state.taskDetail)
    const {loading, error, task} = taskDetail
    console.log(task)

    useEffect(() => {
      if(!userInfo) {
        navigate('/login')
      } else {
        dispatch(listTaskDetails(params.id))
      }
    }, [dispatch, userInfo, navigate, params.id])

  return (
    <div>
      <Container maxWidth="xl">
        <Link to={`/project/${projectId}/tasks?name=${projectName}`}><p>Back to tasks</p></Link>
        <Row>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item>
                <h5 style={{textTransform:'uppercase'}}>{task.name}</h5>
                <p>{task.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    {task.handler && task.handler.name ? (
                      <Chip label={`To: ${task.handler.name}`} color='success' />
                    ) : (
                      <Chip label="Not Assigned" color='warning' />
                    )}
                  </Col>
                  <Col>
                    {task.urgency == 'not urgent' ? (
                      <Chip label={task.urgency} color='success' />
                    ) : task.urgency == 'urgent' ? (
                      <Chip label={task.urgency} color='info' />
                    ) : (
                      <Chip label={task.urgency} color='warning' />
                    )}
                  </Col>
                  <Col>
                    {task.type == 'bug' ? (
                      <Chip label={task.type} color='warning' />
                    ) : (
                      <Chip label={task.type} color='success' />
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item style={{width:'95%', border:'.1rem solid grey', margin:'1rem auto'}}>
                <h6>Conversation</h6>
                {task.messages && task.messages.map(message => (
                  <div className='p-1' style={{borderLeft:'.2rem solid rgb(208, 41, 208)'}} key={message.id}>
                    <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <span style={{display:'flex', alignItems:'center'}}>
                        <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149293406.jpg" />
                        <small> @{message.user.name}</small>
                      </span>
                      <small>{message.createdAt && message.createdAt.substring(0,10)}</small>
                    </span>
                    {/* <span style={{marginLeft:'1rem'}}> */}
                      <p style={{marginLeft:'2.7rem'}}>{message.body}</p>
                    {/* </span> */}
                </div>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TaskScreen
