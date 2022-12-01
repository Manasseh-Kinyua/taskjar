import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { Menu, MenuItem } from '@mui/material';
import { deleteTask, listTasks } from '../actions/taskActions'
import Message from '../components/Message';
import Loader from '../components/Loader';

function TaskListScreen() {

    // const [anchorEl, setAnchorEl] = useState(null)
    // const open = Boolean(anchorEl)

    const params = useParams()

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const projectName = searchParams.get('name')

    const dispatch = useDispatch()

    const taskList = useSelector(state => state.taskList)
    const {loading, error, tasks} = taskList

    const taskDelete = useSelector(state => state.taskDelete)
    const {loading: loadingDeleteTask, error: errorDeleteTask, success: successDeleteTask} = taskDelete

    useEffect(() => {
      dispatch(listTasks(params.id))
    }, [dispatch, params.id, successDeleteTask])

    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget)
    // }

    // const handleClose = () => {
    //   setAnchorEl(null)
    // }

    const deleteTaskHandler = (id) => {
      if(window.confirm("Are you sure you want to delete these task?")) {
        dispatch(deleteTask(id))
      }
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
                {tasks.map(task => (
                  task.status === 0 && (
                    <div key={task.id}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <Link to={`/task/${task.id}`}><h6>{task.name}</h6></Link>
                          {/* <MoreVertIcon id='task-actions-toggle' onClick={handleClick} aria-controls={open ? 'task-actions' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} />
                          <Menu
                            elevation={0}
                            id='task-actions'
                            anchorEl={anchorEl}
                            open={open}
                            MenuListProps={{
                              'aria-labelledby': 'task-actions-toggle'
                            }}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical:'bottom',
                              horizontal:'right'
                            }}
                            transformOrigin={{
                              vertical:'top',
                              horizontal:'right'
                            }}
                            >
                              <MenuItem onClick={() => deleteTaskHandler(task.id)}>Delete</MenuItem>
                              <MenuItem>Task</MenuItem>
                          </Menu> */}
                          <Dropdown>
                            <Dropdown.Toggle style={{background:'none', border:'none'}} >
                              <MoreVertIcon />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background:'rgb(208, 41, 208)', width:'2%'}}>
                              <Dropdown.Item onClick={() => deleteTaskHandler(task.id)}>Delete</Dropdown.Item>
                              <Dropdown.Item>Edit</Dropdown.Item>
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
                {tasks.map(task => (
                  task.status === 1 && (
                    <Link key={task.id} style={{textDecoration:'none'}}  to={`/task/${task.id}`}>
                      <Card className='p-1 m-1'>
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <h6>{task.name}</h6>
                          <MoreVertIcon />
                        </span>
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
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <h6>{task.name}</h6>
                          <MoreVertIcon />
                        </span>
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
                        <span className='py-2' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                          <h6>{task.name}</h6>
                          <MoreVertIcon />
                        </span>
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
