import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listTaskDetails } from '../actions/taskActions'
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { Row, Col, ListGroup, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

function TaskScreen() {

    const params = useParams()

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
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TaskScreen
