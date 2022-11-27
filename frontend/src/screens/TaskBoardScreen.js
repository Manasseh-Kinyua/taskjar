import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProjectDetails } from '../actions/projectActions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from '../components/Loader';
import Message from '../components/Message';

function TaskBoardScreen() {

  const params = useParams()

  const dispatch = useDispatch()

  const projectDetails = useSelector(state => state.projectDetails)
  const {error, loading, project} = projectDetails
  const tasks = project.tasks
  console.log(tasks)
  let taskUrgency = 0
  for(let task in tasks){
    console.log("Task ",task.name)
    let urgency = task
    console.log("Task urgency ",urgency)
    // if(task.urgency == 'not urgent'){
    //   const taskUrgency = 0
    // }else if(task.urgency == 'urgent'){
    //   const taskUrgency = 1
    // }else{
    //   const taskUrgency = 2
    // }
    // return taskUrgency
  }
  console.log(taskUrgency)

  useEffect(() => {
    dispatch(listProjectDetails(params.id))
  }, [dispatch, params.id])

  return (
    <div>
      <Container>
        <h1>Task Board</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            <Col md={6}>
              <Card>
                <LineChart
                  width={500}
                  height={300}
                  data={tasks}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {tasks && tasks.map(task => (
                      <Line key={task.id} type="monotone" dataKey="type" stroke="#8884d8" activeDot={{ r: 8 }} />
                      // <Line type="monotone" dataKey="status" stroke="#82ca9d" />
                    ))}
                </LineChart>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default TaskBoardScreen
