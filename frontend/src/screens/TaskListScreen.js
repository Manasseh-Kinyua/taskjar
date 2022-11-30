import React, { useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import { listTasks } from '../actions/taskActions'
import Message from '../components/Message';

function TaskListScreen() {

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('name')

    const dispatch = useDispatch()

    const taskList = useSelector(state => state.taskList)
    const {loading, error, tasks} = taskList
    console.log(tasks)

    useEffect(() => {
      dispatch(listTasks(params.id))
    }, [dispatch, params.id])

  return (
    <div>
      <Container maxWidth="xxl">
        <h5>{projectName} tasks</h5>
        <Row>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightpink'}}>UNASSIGNED</h6>
                {tasks.map(task => (
                  task.status === 0 && (
                    <Link key={task.id} style={{textDecoration:'none'}}  to={`/task/${task.id}`}>
                      <Card className='p-1 m-1'>
                        <h6>{task.name}</h6>
                        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          {task.urgeny == 'not urgent' ? (
                            <Chip label={task.urgency} color='success' />
                          ) : task.urgency == 'urgent' ? (
                            <Chip label={task.urgency} color='primary' />
                          ) : (
                            <Chip label={task.urgency} color='warning' />
                          )}
                          {task.type == 'bug' ? (
                            <Chip label={task.type} color="error" />
                          ) : (
                            <Chip label={task.type} color="success" />
                          )}
                        </span>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label="Not Assigned" color="secondary" /></span>
                      </Card>
                    </Link>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>ASSIGNED</h6>
                {tasks.map(task => (
                  task.status === 1 && (
                    <Link key={task.id} style={{textDecoration:'none'}}  to={`/task/${task.id}`}>
                      <Card className='p-1 m-1'>
                        <h6>{task.name}</h6>
                        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          {task.urgeny == 'not urgent' ? (
                            <Chip label={task.urgency} color='success' />
                          ) : task.urgency == 'urgent' ? (
                            <Chip label={task.urgency} color='primary' />
                          ) : (
                            <Chip label={task.urgency} color='warning' />
                          )}
                          {task.type == 'bug' ? (
                            <Chip label={task.type} color="error" />
                          ) : (
                            <Chip label={task.type} color="success" />
                          )}
                        </span>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </Link>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>INPROGRESS</h6>
                {tasks.map(task => (
                  task.status === 2 && (
                    <Link key={task.id} style={{textDecoration:'none'}}  to={`/task/${task.id}`}>
                      <Card className='p-1 m-1'>
                        <h6>{task.name}</h6>
                        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          {task.urgeny == 'not urgent' ? (
                            <Chip label={task.urgency} color='success' />
                          ) : task.urgency == 'urgent' ? (
                            <Chip label={task.urgency} color='primary' />
                          ) : (
                            <Chip label={task.urgency} color='warning' />
                          )}
                          {task.type == 'bug' ? (
                            <Chip label={task.type} color="error" />
                          ) : (
                            <Chip label={task.type} color="success" />
                          )}
                        </span>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </Link>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>DONE</h6>
                {tasks.map(task => (
                  task.status === 3 && (
                    <Link key={task.id} style={{textDecoration:'none'}}  to={`/task/${task.id}`}>
                      <Card className='p-1 m-1'>
                        <h6>{task.name}</h6>
                        <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          {task.urgeny == 'not urgent' ? (
                            <Chip label={task.urgency} color='success' />
                          ) : task.urgency == 'urgent' ? (
                            <Chip label={task.urgency} color='primary' />
                          ) : (
                            <Chip label={task.urgency} color='warning' />
                          )}
                          {task.type == 'bug' ? (
                            <Chip label={task.type} color="error" />
                          ) : (
                            <Chip label={task.type} color="success" />
                          )}
                        </span>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </Link>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TaskListScreen
