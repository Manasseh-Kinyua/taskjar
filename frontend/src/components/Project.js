import React, { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject } from '../actions/projectActions';

function Project({project}) {

  const dispatch = useDispatch()

  // const projectDelete = useSelector(state => state.projectDelete)
  // const {success} = projectDelete

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  // useEffect(() => {
  //   // if(success) {
  //   //   dispatch()
  //   // }
  // }, [success])

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id))
  }

  return (
      <Card className='card' >
        <Card.Body>
          <Card.Text>
            <Link className='green-text' to={`/project/${project.id}?name=${project.name}`}><strong>{project.name}</strong></Link>
          </Card.Text>
          <Row>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <strong>Scrum</strong>
              <span style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU" />
                <small className='green-text'>@{project.scrum.name}</small>
              </span>
            </div>
          </Row>
          <Row className='py-3'>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <Badge badgeContent={project.tasks.length} color="primary" showZero>
                <Chip label="Tasks" color='primary' variant="outlined" />
              </Badge>
              <Badge badgeContent={project.contributors.length} color="secondary" showZero>
                <Chip label="Contributors" color='secondary' variant="outlined" />
              </Badge>
            </div>
          </Row>
          <hr style={{margin:'0'}}></hr>
          {userInfo && userInfo.id == project.scrum.id && (
            <Row className='py-1'>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <Link to={`/project/${project.id}/edit`}><EditIcon /></Link>
                <span
                  onClick={() => deleteProjectHandler(project.id)}
                  >
                    <DeleteIcon /></span>
              </div>
            </Row>
            )}
          {/* )} */}
          
        </Card.Body>
      </Card>
  )
}

export default Project
