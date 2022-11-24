import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom'

function Project({project}) {
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
                <small className='green-text'>@{project.scrum}</small>
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
          
        </Card.Body>
      </Card>
  )
}

export default Project
