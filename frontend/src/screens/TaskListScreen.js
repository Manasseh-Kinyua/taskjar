import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { deleteTask, listTasks, markTaskAsDone, markTaskAsInProgress } from '../actions/taskActions'
import Message from '../components/Message';
import Loader from '../components/Loader';

function TaskListScreen() {

    const params = useParams()
    const projectId = params.id

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('name')

    const dispatch = useDispatch()

    const taskList = useSelector(state => state.taskList)
    const {loading, error, tasks} = taskList

    const taskDelete = useSelector(state => state.taskDelete)
    const {loading: loadingDeleteTask, error: errorDeleteTask, success: successDeleteTask} = taskDelete

    const taskUpdateToInProgress = useSelector(state => state.taskUpdateToInProgress)
    const {loading: loadingMarkInProgress, error: errorMarkInProgress, success: successMarkInProgress} = taskUpdateToInProgress

    const taskUpdateToDone = useSelector(state => state.taskUpdateToDone)
    const {loading: loadingMarkDone, error: errorMarkDone, success: successMarkDone} = taskUpdateToDone

    useEffect(() => {
      dispatch(listTasks(params.id))
    }, [dispatch, params.id, successDeleteTask, successMarkInProgress, successMarkDone])

    const deleteTaskHandler = (id) => {
      if(window.confirm("Are you sure you want to delete these task?")) {
        dispatch(deleteTask(id))
      }
    }

    const markTaskAsInProgressHandler = (id) => {
      dispatch(markTaskAsInProgress(id))
    }

    const markTaskAsDoneHandler = (id) => {
      dispatch(markTaskAsDone(id))
    }

  return (
    <div>
      <Container maxWidth="xxl">
        <div className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <h5>{projectName} tasks</h5>
          <Link to={`/project/${params.id}/tasks/create?name=${projectName}`}><Button className='btn-md' style={{backgroundColor:'#20c997'}}>Add a Task</Button></Link>
        </div>
        {loading && <Loader />}
        {error && <Message variant="error">{error}</Message>}
        <Row>
          
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightpink'}}>UNASSIGNED</h6>
                {tasks && tasks.map(task => (
                  task.status === 0 && (
                    <div key={task.id}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <Link to={`/task/${task.id}?p-id=${projectId}&p-name=${projectName}`}><h6>{task.name}</h6></Link>
                          <Dropdown>
                            <Dropdown.Toggle style={{background:'none', border:'none'}} >
                              <MoreVertIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background:'rgb(208, 41, 208)'}}>
                              <Dropdown.Item onClick={() => deleteTaskHandler(task.id)}>Delete</Dropdown.Item>
                              <Dropdown.Item as={Link} to={`/task/${task.id}/edit?p-id=${projectId}&p-name=${projectName}`}>Edit</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                        <Link to={`/task/${task.id}`} style={{textDecoration:'none'}}>
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
                        </Link>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label="Not Assigned" color="secondary" /></span>
                      </Card>
                    </div>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>ASSIGNED</h6>
                {tasks && tasks.map(task => (
                  task.status === 1 && (
                    <div key={task.id}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <Link to={`/task/${task.id}?p-id=${projectId}&p-name=${projectName}`}><h6>{task.name}</h6></Link>
                          <Dropdown >
                            <Dropdown.Toggle style={{background:'none', border:'none'}} >
                              <MoreVertIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background:'rgb(208, 41, 208)'}}>
                              <Dropdown.Item onClick={() => deleteTaskHandler(task.id)}>Delete</Dropdown.Item>
                              <Dropdown.Item as={Link} to={`/task/${task.id}/edit?p-id=${projectId}&p-name=${projectName}`}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => markTaskAsInProgressHandler(task.id)}>In Progress</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                        <Link to={`/task/${task.id}`} style={{textDecoration:'none'}}>
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
                        </Link>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </div>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>INPROGRESS</h6>
                {tasks && tasks.map(task => (
                  task.status === 2 && (
                    <div key={task.id}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <Link to={`/task/${task.id}?p-id=${projectId}&p-name=${projectName}`}><h6>{task.name}</h6></Link>
                          <Dropdown>
                            <Dropdown.Toggle style={{background:'none', border:'none'}} >
                              <MoreVertIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background:'rgb(208, 41, 208)'}}>
                              <Dropdown.Item onClick={() => deleteTaskHandler(task.id)}>Delete</Dropdown.Item>
                              <Dropdown.Item as={Link} to={`/task/${task.id}/edit?p-id=${projectId}&p-name=${projectName}`}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => markTaskAsDoneHandler(task.id)}>Mark Done</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                        <Link to={`/task/${task.id}`} style={{textDecoration:'none'}}>
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
                        </Link>
                          <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </div>
                  ) 
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup style={{padding:'none', borderRadius:'0', minHeight:'80vh'}}>
              <ListGroup.Item style={{padding:'0'}}>
                <h6 style={{padding:'1rem', backgroundColor:'lightblue'}}>DONE</h6>
                {tasks && tasks.map(task => (
                  task.status === 3 && (
                    <div key={task.id}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <Link to={`/task/${task.id}?p-id=${projectId}&p-name=${projectName}`}><h6>{task.name}</h6></Link>
                          <Dropdown>
                            <Dropdown.Toggle style={{background:'none', border:'none'}} >
                              <MoreVertIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background:'rgb(208, 41, 208)'}}>
                              <Dropdown.Item onClick={() => deleteTaskHandler(task.id)}>Delete</Dropdown.Item>
                              <Dropdown.Item as={Link} to={`/task/${task.id}/edit?p-id=${projectId}&p-name=${projectName}`}>Edit</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </span>
                        <Link to={`/task/${task.id}`} style={{textDecoration:'none'}}>
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
                        </Link>
                        <span className='py-2' style={{textAlign:'right',}}><Chip label={task.handler.name} color="secondary" /></span>
                      </Card>
                    </div>
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
