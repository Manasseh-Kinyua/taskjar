import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProjectDetails } from '../actions/projectActions';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector } from 'recharts';
import Loader from '../components/Loader';
import Message from '../components/Message';

function TaskBoardScreen() {

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const params = useParams()

  const dispatch = useDispatch()

  const projectDetails = useSelector(state => state.projectDetails)
  const {error, loading, project} = projectDetails
  const tasks = project.tasks

  useEffect(() => {
    dispatch(listProjectDetails(params.id))
  }, [dispatch, params.id])

  return (
    <div>
      <Container>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <h1>Task Board</h1>
          <Link to={`/project/${params.id}/tasks?name=${project.name}`}>Manage Tasks</Link>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <div>
            <Row>
              <h5>Task Progress</h5>
              <Col sm={12} md={12}>
                <Card>
                <ListGroup>
                <ListGroup.Item>
                  <BarChart width={500} height={250} data={tasks}>
                    <Bar dataKey="status" fill="purple" />
                    <XAxis dataKey='id'/>
                    <YAxis />
                    <Tooltip />
                  </BarChart>
                </ListGroup.Item>
                </ListGroup>
                </Card>
              </Col>
            </Row>

            <Row className='my-3'>
              <h5>Bugs and Features</h5>
              <Card className='my-2 p-0'>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <PieChart width={400} height={400}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            >
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                          </Pie>
                        </PieChart>
                      </Col>
                      <Col>
                        <PieChart width={400} height={400}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            >
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                          </Pie>
                        </PieChart>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Row>
          </div>
        )}
      </Container>
    </div>
  )
}

export default TaskBoardScreen
