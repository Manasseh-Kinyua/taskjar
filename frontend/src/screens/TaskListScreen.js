import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
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
                    <Card>{Card.name}</Card>
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
                    <Card key={task.id}>{task.name}</Card>
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
                    <Card key={task.id}>{task.name}</Card>
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
                  task.status === 3 && (
                    <Card key={task.id}>{task.name}</Card>
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
